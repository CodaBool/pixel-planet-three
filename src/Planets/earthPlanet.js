import { Vector4 } from "three";
import { Group } from "three"
import { createAtmosphereLayer } from "../Layers/atmosphereLayer.js";
import { createBasePlanet } from "../Layers/basePlanet.js";
import { createCloudLayer } from "../Layers/cloudLayer.js";
import { createlandMassLayer } from "../Layers/landMass.js";

export const createEarthPlanet = ({colors, pixels, seed, land, cloudCover}) => {
    const earth = new Group();
    if (!colors.base) {
        colors.base = [
            new Vector4(102 / 255, 176 / 255, 199 / 255, 1),
            new Vector4(102 / 255, 176 / 255, 199 / 255, 1),
            new Vector4(52 / 255, 65 / 255, 157 / 255, 1),
        ]
    }

    // lightPos = new Vector2(0.39, 0.7), lightIntensity = 0.1, colors = null, rotationSpeed = 0.1, rotation = 0.0, pixels, seed
    const basePlanet = createBasePlanet(undefined,undefined,colors, undefined, undefined, pixels, seed)
    // lightPos = new Vector2(0.39, 0.7), lightIntensity = 0.1, colors = null, rotationSpeed = 0.1, rotation = 0.0, land = 0.6
    const landmass = createlandMassLayer(undefined,undefined,colors,undefined,undefined,land, pixels, seed)
    // colors, lightPos = new Vector2(0.39, 0.7), rotationSpeed = 0.1, rotation = 0.0, cloudCover = 0.546, stretch = 2.5, pixels, seed
    const cloudsLayer = createCloudLayer(colors, undefined, undefined, undefined, cloudCover, undefined, pixels, seed)

    const atmosphere = createAtmosphereLayer(colors, pixels)

    earth.add(basePlanet,landmass,cloudsLayer,atmosphere)
    return earth
}