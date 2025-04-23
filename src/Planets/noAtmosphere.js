import { Group, Vector4 } from "three"
import { createBasePlanet } from "../Layers/basePlanet.js"
import { createCraterLayer } from "../Layers/craterLayer.js"

export const createNoAtmospherePlanet = ({colors, pixels, seed}) => {
    const noAtmospherePlanet = new Group()

    // lightPos , lightIntensity , colors , rotationSpeed , rotation , pixels , seed )
    const basePlanet = createBasePlanet(undefined, undefined, colors, undefined, undefined, pixels, seed)

    // lightPos = new Vector2(0.39, 0.7), colors, rotationSpeed = 0.1, rotation = 0.0
    const craterLayer = createCraterLayer(undefined, colors, undefined, undefined, pixels, seed)

    noAtmospherePlanet.add(basePlanet)
    noAtmospherePlanet.add(craterLayer)

    return noAtmospherePlanet
}

