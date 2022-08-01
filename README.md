# 🌍🤖 Planet Stacks 🤖🌍

> A community-driven site with tech stacks for all sorts of curious and wonderful things.

Created by Juan Carlos Asensio ([@toysoldier182](https://twitter.com/toysoldier182)), inspired by the ever-amazing Stephanie Eckles ([@St3ph](https://twitter.com/st3ph))

## Add Your Stack

Submit your `techStack` by creating a pull request that includes a new `.json` file named after the project/product for which you're creating a stack in the appropriate directory:

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
Let's start from the bottom up. A stack is simply an arrangement of “things” kept in a certain order: one over the other. Think pancakes, hamburguers (yum) and books! Piece of cake (oops, more layers!).

### And what is a tech stack?
Brick by brick, huh? A tech stack is a term borrowed from the world of app development – as in the web, mobile and desktop apps we use everyday on our phones, tables, laptops etc...

Defined more broadly for our purposes, a tech stack is a set of technologies that are stacked together to build something.

### But/and what do you *really* mean by "tech stack"? 
This is the kicker, the beet and tomatoes! 

It is implied (sort of) that any given "layer" must be stacked atop others in order to function properly. If they were stacked in the wrong order, the thing you're building (or describing) would not work.

I, personally, think of a tech stack as a series of layers where each one is composed of technologies operating closely with one another to perform a "function". 

Every technology in every layer is responsible for something, but together they form a more comprehensive entity or function that does a better job at describing how the sausage is made.

### So what sort of "things", then, can be "broken down into" a tech stack?
Everything! Every human-made "thing" and everything in the Natural world is made up of smaller parts that come together to form a whole. Perhaps they are not neatly stacked, but the idea is that.

We could choose to aim our focus at human-made things here because 

### What a tech stack is not...
Ok, let's cool our jets! Of course, any given thing is greater than the sum of its parts. 

A tech stack is not an exhaustive guide of how something works. It describes the *what* through each component in each layer, but/and it *hints* at a deeper understanding of *how* something works by how those components are grouped into layers and *where* each of those layers is placed within the stack.

### Because there's more than one way to peel an orange, take a crack at it!
This concept might seem too rigid to both (1) uncover what some things are and what they're made of, and (2) *hint* at how they work.

Things are incredibly complex, made up of a scary number of things interacting in a mind-boggling number of ways.

But/and there's a whole lot of room for creativity here! There is something beautiful and terribly illuminating about how you could group technologies into "layers" (or "functions") and where you could place them in a stack to better describe what they are, how they came to be, and how they work.

The constraints so few (a stack of layers), the possibilities, still, so vast to explore.

## Oh, and feedback is more than welcome!

You can [submit a PR](https://github.com/juancarlosasensio/planet-stack/pulls).
