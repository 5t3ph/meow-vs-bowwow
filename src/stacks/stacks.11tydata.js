let data = {
  "tags": ["stacks", "stack"],
  "date": "",
};

if (process.env.NODE_ENV === "production") {
	data['date'] = "git Last Modified";
}

module.exports = data;