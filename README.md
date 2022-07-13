# 🌍🤖 Planet Stacks 🤖🌍

> A community-driven site with tech stacks for all sorts of curious and wonderful things.

Created by Juan Carlos Asensio ([@toysoldier182](https://twitter.com/toysoldier182)), inspired by the ever-amazing Stephanie Eckles ([@St3ph](https://twitter.com/st3ph))

## Add Your Stack

To submit your stack, create pull request with that includes a new `.json` file named after your stack in the appropriate directory `src/_data/stacks`:

```
src/
  _data_/
    stacks/
```

The `json` file contents should follow the schema below. You must provide a full URL to the photo of your pet as image uploads will not be accepted.

```json
{
  // Required
  "title": "Tesla Test",
  "author": "Melon Lust",
  "techStack": {
    "interior": [
      "Aluminum",
      "Leather"
    ],
    "exterior": [
      "Aluminum",
      "Glass"
    ],
    "power": [
      "Drive train",
      "Tesla battery"
    ],
    "software": [
      "JavaScript",
      "C++"
    ]
  }, 
  // Optional
  "twitter": "FancyFeast",
  "websiteUrl": "squeaky mouse"
}
```

## Feedback welcome!

You can [file it as an issue](https://github.com/5t3ph/stylestage/issues).

[![Buy me a coffee](https://cdn.buymeacoffee.com/buttons/default-violet.png)](https://www.buymeacoffee.com/moderncss)


## Useful resources

- 11ty Pagination: https://11ty.recipes/recipes/add-pagination/