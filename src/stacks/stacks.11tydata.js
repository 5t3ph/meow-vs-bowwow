let data = {};

if (process.env.NODE_ENV === "production") {
	data.date = "Last Modified";
}

module.exports = data;