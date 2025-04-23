import { Group } from "three";
import { createBaseGasPlanet } from "../Layers/baseGasPlanet.js";
import { createGasPLayer } from "../Layers/gasLayer.js";

export const createGasGiant = ({colors, pixels, seed, clouds, lakes, cloudCover}) => {
    const gasGiantGroup = new Group()


    // lightPos , cloudCover, colors, stretch, rotationSpeed, rotation, cloudCurve
    const basePlanet = createBaseGasPlanet(undefined, undefined, colors, undefined, undefined, undefined, undefined, pixels, seed)

    // lightPos, cloudCover, colors, stretch, rotationSpeed, rotation, cloudCurve
    const gasLayer = createGasPLayer(undefined, undefined, colors, undefined, undefined, undefined, undefined, pixels, seed)
    gasGiantGroup.add(basePlanet)
    gasGiantGroup.add(gasLayer)

    return gasGiantGroup
}