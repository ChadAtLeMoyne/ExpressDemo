// Import the express stuff
var express = require("express");
const user_information = require("./data/user_data.json")

// create an application object
var app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Is this thing on?");
});

app.get('/on', (req, res) => {
    res.send("Yep, it's on!");
});

app.get('/data_dump', (req, res) => {
    res.send(user_information);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})