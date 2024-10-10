// Import the express stuff
var express = require("express");

// create an application object
var app = express();
const PORT = 3000;

app.length('/', (req, res) => {
    res.send("Is this thing on?");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})