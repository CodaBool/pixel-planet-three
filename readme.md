
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
type: [baren, ice, gas, ring, asteroid, star, lava, dessert, terrestrial]
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
- [ring planet](https://codabool.github.io/pixel-planet-three?type=ring&baseColors=B6D3E0,9E7479,4D2821,c954aa&featureColors=35e2c9,274ec2,bf6617,7a4258&layerColors=05ad96,325af0,a7db74,512733&atmosphere=64c8e640,0078ff80,0000c880&schemeColor=white&pixels=300&ring=.25)
- [lava planet](https://codabool.github.io/pixel-planet-three?type=lava&baseColors=B6D3E0,9E7479,4D2821,c954aa&featureColors=35e2c9,274ec2,bf6617,7a4258&schemeColor=white&pixels=300)

## Dev Notes
### TODO
- Galaxy and blackhole still missing

### GitHub Limits
- GitHub Pages has a 100 GB per month limit. Limit might show [here](https://github.com/settings/billing)

## Credits
- [Original in GoDot](https://deep-fold.itch.io/pixel-planet-generator)
- [Original Background in GoDot](https://github.com/Deep-Fold/PixelSpace)
- [Port to JavaScript / Three.js](https://github.com/Timur310/PixelPlanets)
