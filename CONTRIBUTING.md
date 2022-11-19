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
