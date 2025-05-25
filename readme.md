
# Pixel planet Generator
A forked project to bring the generated pixel planet to new lengths.
Mainly for the use with Stargazer.

## Parameters
> currently these URL parameters are supported for planet generation ([code](https://github.com/CodaBool/pixel-planet-three/blob/main/index.js))

```sh
pixels: 100 - 500
baseColors: 4 comma separated hexes
featureColors: 4 comma separated hexes
layerColors: 4 comma separated alpha hexes
atmosphere: 3 comma separated alpha hexes
type: [barren, ice, gas, ring, asteroid, star, lava, desert, terrestrial]
seed: 0 - 100

# star (defaults orange)
schemeColor: [blue, orange, red, white, yellow]

# ice & terrestrial (defaults true)
clouds: true/false

# ice & terrestrial (lower is more clouds)
cloudCover: 0 - 1

# terrestrial (lower is more land)
land: 0.1 - 1

# asteroid
size: 0 - 9

# width of ring
ring: 0 - 0.2

# lava (lower is more lava)
rivers: 0 - 1

# ice (lower is more lakes)
lakes: 0 - 1
```

You must specify at the minimum hexes or the planet will not be created

### Examples
- [barren](https://codabool.github.io/pixel-planet-three/?type=barren&pixels=800)
- [ice](https://codabool.github.io/pixel-planet-three/?type=ice&pixels=800)
- [gas](https://codabool.github.io/pixel-planet-three/?type=gas&pixels=800)
- [ring](https://codabool.github.io/pixel-planet-three/?type=ring&pixels=800)
- [asteroid](https://codabool.github.io/pixel-planet-three/?type=asteroid&pixels=800&size=4)
- [star](https://codabool.github.io/pixel-planet-three/?type=star&pixels=800&schemeColor=yellow)
- [blue star](https://codabool.github.io/pixel-planet-three/?type=star&pixels=800&schemeColor=blue&baseColors=4753fc)
- [lava](https://codabool.github.io/pixel-planet-three/?type=lava&pixels=800)
- [desert](https://codabool.github.io/pixel-planet-three/?type=desert&pixels=800)
- [terrestrial, oceans](https://codabool.github.io/pixel-planet-three/?type=terrestrial&pixels=800&land=.8&cloudCover=.4)
- [terrestrial, lands](https://codabool.github.io/pixel-planet-three/?type=terrestrial&pixels=800)

## Dev Notes
### TODO
- Galaxy and blackhole still missing

### GitHub Limits
- GitHub Pages has a 100 GB per month limit. Limit might show [here](https://github.com/settings/billing)

## Credits
- [Original in GoDot](https://deep-fold.itch.io/pixel-planet-generator)
- [Original Background in GoDot](https://github.com/Deep-Fold/PixelSpace)
- [Port to JavaScript / Three.js](https://github.com/Timur310/PixelPlanets)
