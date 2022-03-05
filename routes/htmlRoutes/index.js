// imports
const path = require("path");
const router = require("express").Router();


// '/' brings us the root of the server connecting index.html 
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});
// /animals joins the server and the animals.html
router.get("/animals", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/animals.html"));
});
// /zookeepers joins the server and the zookeepers.html
router.get("/zookeepers", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/zookeepers.html"));
});
// '*' is a wildcard route, and endpoint that will default to homepage - '*' always comes last in GET routes
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;