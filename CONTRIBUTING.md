## Add Your Dog or Cat

To submit your pet, create pull request with that includes a new `.json` file named after your pet in the appropriate directory, either `cats` or `dogs`:

```bash
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
