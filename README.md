# 😺 Meow vs. BowWow 🐶

> An example of essential and suggested Eleventy (11ty) features for creating a community-driven site.

Created by Stephanie Eckles ([@5t3ph](https://twitter.com/5t3ph))

## Add Your Dog or Cat

To submit your pet, create pull request with that includes a new `.json` file named after your pet in the appropriate directory, either `cats` or `dogs`:

```
src/
  pets/
    cats/
    dogs/
```

The `json` file contents should follow the schema below. You must provide a full URL to the photo of your pet as image uploads will not be accepted.

```json
{
  // Required
  "name": "Fluffy",
  "petColor": "orange",
  "photoURL": "http://placekitten.com/320",
  "ownerName": "Bob",
  // Optional
  "favoriteFood": "FancyFeast",
  "favoriteToy": "squeaky mouse",
  "ownerTwitter": "#"
}
```

## Feedback welcome!

You can [file it as an issue](https://github.com/5t3ph/stylestage/issues).

[![Buy me a coffee](https://cdn.buymeacoffee.com/buttons/default-violet.png)](https://www.buymeacoffee.com/moderncss)
