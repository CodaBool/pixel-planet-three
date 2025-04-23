import { Group, Vector2, Vector4 } from 'three';
import { createCamera } from './src/camera';
import { createStars } from './src/Layers/stars';
import { createClock, createScene, createWebGlRenderer } from './src/Three';
import { generatePlanetByType } from './src/utils';

function initScene() {

    const container = document.querySelector('#root')
    const p = new URLSearchParams(window.location.search)
    const aspect = container.clientWidth / container.clientHeight;
    const scene = createScene();
    const clock = createClock();
    const camera = createCamera(75, aspect, 0.1, 100000);
    
    let totalX = 0;
    let moveX = 0;
    let holding = false
    const baseSpeed = 0.5;
    const maxTimeSpeed = 0.9;    // clamp to ±0.1
    const timeFriction = 0.95;   // bleed-off each frame
    const maxAccel = 0.01;   // maximum change in time_speed per frame

    container.addEventListener("mousedown", (e) =>{
        holding = true;
    },false);
    container.addEventListener("mouseup", (e) =>{
        holding = false;
    },false);
    container.addEventListener('mousemove', (e) => {
        e.preventDefault();
        totalX += Math.abs(e.movementX);
        moveX += e.movementX;
    }, false)

    const planetGroup = new Group()


    // seed = 1 - 10 or 10 - 100
    planetGroup.add(generatePlanetByType({
        pixels: p.get("pixels") ? Number(p.get("pixels")) : undefined,
        colors: {
            base: p.get("baseColors") ? p.get("baseColors") : undefined,
            feature: p.get("featureColors") ? p.get("featureColors") : undefined,
            layer: p.get("layerColors") ? p.get("layerColors") : undefined,
            scheme: p.get("schemeColor") ? p.get("schemeColor") : undefined,
            atmosphere: p.get("atmosphere") ? p.get("atmosphere") : undefined,
        },
        clouds: p.get("clouds") === "true",
        type: p.get('type') || "terrestrial",
        cloudCover: p.get("cloudCover") ? Number(p.get("cloudCover")) : undefined, // terrestrial
        size: p.get("size") ? Number(p.get("size")) : undefined, // 
        land: p.get("land") ? Number(p.get("land")) : undefined, // terrestrial 0-1 percent of land
        ringWidth: p.get("ring") ? Number(p.get("ring")) : undefined, // ring
        lakes: p.get("lakes") ? Number(p.get("lakes")) : undefined,
        rivers: p.get("rivers") ? Number(p.get("rivers")) : undefined, // only used by lava
        seed: p.get("seed") ? Number(p.get("seed")) : undefined,
    }))
    scene.add(planetGroup)

    const skySpeed = 0.00001;

    const renderer = createWebGlRenderer();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // prepare star particles
    const starGroup = createStars(1000);
    scene.add(starGroup);

    document.getElementById("root").appendChild(renderer.domElement);
    camera.position.z = 1

    // TODO: lava river doesn't match spin speed of crater
    const notLava = p.get("type") !== "lava"

    function animate() {
        requestAnimationFrame(animate);

        planetGroup.children.forEach(planet => {
            planet.children.forEach(layer => {
                const u = layer.material.uniforms;
                if (!u?.time || !u?.time_speed) return;
        
                const elapsed = clock.getElapsedTime() % 10000;

                u.time.value = elapsed;
        
                if (holding && notLava) {
                    const rawDelta = moveX * 0.01;
                    const limitedDelta = Math.max(-maxAccel, Math.min(maxAccel, rawDelta));
                    u.time_speed.value += limitedDelta;
                } else {
                    // Apply default base speed + decay existing motion
                    u.time_speed.value = baseSpeed + (u.time_speed.value - baseSpeed) * timeFriction;
                }
        
                // Clamp to ±maxTimeSpeed
                u.time_speed.value = Math.max(-maxTimeSpeed, Math.min(maxTimeSpeed, u.time_speed.value));
            });
        });
        

        //update camera
        camera.updateProjectionMatrix();

        // animate space
        starGroup.rotateY(skySpeed);
        starGroup.rotateX(skySpeed);
        starGroup.rotateZ(skySpeed);

        renderer.render(scene, camera);
        moveX = totalX = 0;
    };

    animate();
}

window.onload = () => {
    initScene()
}