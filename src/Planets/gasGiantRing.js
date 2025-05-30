import { Group } from "three";
import { createDenseGasPlanet } from "../Layers/denseGasLayer.js";
import { createRingLayer } from "../Layers/ringLayer.js";

export const createGasGiantRing = ({colors, pixels, seed, clouds, ringWidth}) => {
    const gasGiantGroup = new Group()

    // ightPos = new Vector2(0.39, 0.7), rotationSpeed = 0.1, ringWidth = 0.143, perspective = 6.0, scalePlanet = 4.0
    const ring = createRingLayer(undefined, undefined, ringWidth, undefined, pixels, seed, colors)
    // lightPos = new Vector2(0.39, 0.7), rotationSpeed = 0.1
    const gasPlanet = createDenseGasPlanet(undefined, undefined, pixels, seed, colors)
    ring.position.z = 0.01
    ring.scale.set(2.0,2.0)
    gasGiantGroup.add(gasPlanet)
    gasGiantGroup.add(ring)

    return gasGiantGroup
}