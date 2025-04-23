import { Vector4 } from "three";
import { createAsteroid } from "./Planets/asteroid.js";
import { createDryPlanet } from "./Planets/DryPlanet.js";
import { createEarthPlanet } from "./Planets/earthPlanet.js";
import { createGasGiant } from "./Planets/gasGiant.js";
import { createGasGiantRing } from "./Planets/gasGiantRing.js";
import { createIcePlanet } from "./Planets/icePlanet.js";
import { createLavaPlanet } from "./Planets/lavaPlanet.js";
import { createNoAtmospherePlanet } from "./Planets/noAtmosphere.js";
import { createStarPlanet } from "./Planets/starPlanet.js";

export function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function flip() {
    return Math.random() > 0.5
}

export function randomPointOnSphere() {
    var u = Math.random();
    var v = Math.random();
    var theta = 2 * Math.PI * u;
    var phi = Math.acos(2 * v - 1);
    var x = 0 + (1 * Math.sin(phi) * Math.cos(theta));
    var y = 0 + (1 * Math.sin(phi) * Math.sin(theta));
    var z = 0 + (1 * Math.cos(phi));
    return { "x": x, "y": y, "z": z };
}

export function generatePlanetByType(params) {
    switch (params.type) {
        case "baren":
            return createNoAtmospherePlanet(params)
        case "ice":
            return createIcePlanet(params)
        case "gas":
            return createGasGiant(params)
        case "ring":
            return createGasGiantRing(params)
        case "asteroid":
            // lightPos = new Vector2(0.39, 0.7), colors, rotation = 0.0, pixels, seed, size
            return createAsteroid(undefined, params.colors, undefined, params.pixels, params.seed, params.size)
        case "star":
            return createStarPlanet(params)
        case "lava":
            return createLavaPlanet(params)
        case "dessert":
            // ightPos = new Vector2(0.39, 0.7), colors, rotationSpeed = 0.1, rotation = 0.0, pixels, seed
            return createDryPlanet(undefined, params.colors, undefined, undefined, params.pixels, params.seed)
        case "terrestrial":
            return createEarthPlanet(params)
    }
}

export function hexToVector4(rawHex) {
    let hex = rawHex.replace(/^#/, '');
    
    // expand shorthand (e.g. "abc" → "aabbcc")
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
  
    const hasAlpha = hex.length === 8;
    const r = parseInt(hex.slice(0,2), 16) / 255;
    const g = parseInt(hex.slice(2,4), 16) / 255;
    const b = parseInt(hex.slice(4,6), 16) / 255;
    const a = hasAlpha
      ? parseInt(hex.slice(6,8), 16) / 255
      : 1;
  
    return new Vector4(r, g, b, a);
  }