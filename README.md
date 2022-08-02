# 🌍🤖 Planet Stacks 🤖🌍

> A community-driven site with tech stacks for all sorts of curious and wonderful things.

Created by Juan Carlos Asensio ([@toysoldier182](https://twitter.com/toysoldier182)), inspired by the ever-amazing Stephanie Eckles ([@5t3ph](https://twitter.com/5t3ph?lang=en))

## Add Your Stack

Submit your `techStack` by creating a pull request that includes a new `.json` file named after the project/product/thing for which you're creating a stack in the appropriate directory:

```bash
src/
  _data_/
    stacks/
```

The `json` file contents should follow the pattern/schema below with the appropriate required fields (values for the `techStack` field are just an example).

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
  "twitter": "SqueakyMuskrat",
  "websiteUrl": "https://www.squeakymuskrat.com"
}
```

## Peruse the FAQs

### What is a stack?
Let's start from the bottom up. A stack is simply an arrangement of “things” kept in a certain order: one over the other. Think pancakes, hamburguers (yum) or books! Piece of cake, right? (Oops, more layers!).

### And what is a tech stack?
Brick by brick, huh? A tech stack is a term borrowed from the world of app development – as in the web, mobile and desktop apps we use everyday on our phones, tables, laptops etc...

Defined more broadly for our purposes, a tech stack is a set of technologies that are stacked together to build or describe "something", anything.

### But/and what do you *really* mean by "tech stack"? 
This is the kicker, the beet and tomatoes! 

It is implied (sort of) that any given "layer" must be stacked atop others in order to function properly. If they were stacked in the wrong order, the thing you're building (or describing) would not work properly.

That's a bit too limiting (more on that shortly). Instead, if you were to use the same technologies but stacked differently, you could get different functionalities on top of one technology (or layer) vs. another. Still, each layer is contributing to the whole, albeit slightly differently.

I, personally, think of a tech stack as a series of "layers", where each one is composed of technologies operating closely with one another to perform a "function". "Layers" are bundles of technologies.

Every technology in every layer is responsible for something, but together they form a more comprehensive entity or function that does a better job at describing how the (red bean) sausage is made. You could stack them differently and still get "something"!

### So what sort of "things", then, can be "broken down into" a tech stack?
Everything! Every human-made "thing" and everything in the Natural world is made up of smaller parts that come together to form a whole. Perhaps they are not neatly stacked, but the idea is that they are configured in some way to form a whole.

It could be more illuminating to focus on human-made things here. Nobody knows how to make a pencil...but we could gain a better understanding of how a pencil (or a rocket) comes to be if we

### What a tech stack is not...
Ok, let's cool our jets! 

Of course, any given thing is greater than the sum of its parts. A tech stack is not an exhaustive guide of how something works. It is not a definitive, writte-in-stone list of ingredients and it is also not a recipe. It is not a blueprint.

It describes the *what* through each component in each layer, but/and it *hints* at a deeper understanding of *how* something works by how those components are grouped into layers and *where* each of those layers is placed within the stack.

### Because there's more than one way to peel an orange, take a crack at it!
This concept might seem too rigid to both (1) uncover what some things are and what they're made of, and (2) *hint* at how they work.

Things are incredibly complex, made up of a scary number of things interacting in a mind-boggling number of ways.

But/and there's a whole lot of room for creativity here! There is something beautiful and terribly illuminating about how you could group technologies into "layers" (or "functions") and where you could place them in a stack to better describe what things are, how they came to be, and how they work.

All it takes is a little jazz. The constraints so few (a stack of layers), the possibilities, still, so vast to explore.

## Oh, and feedback is more than welcome!

You can [submit a PR](https://github.com/juancarlosasensio/planet-stack/pulls).
