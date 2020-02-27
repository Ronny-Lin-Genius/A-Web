const express = require("express");
const router = express.Router();

const myData = [
{image: "assets/picture/user/html.jpg", name: "Html", price: 30, description: "It is a basic mark up language"},
{image: "assets/picture/user/css.jpg", name: "Css", price: 30, description: "It is not so that a easy language"},
{image: "assets/picture/user/javascript.jpg", name: "Javascript", price: 60, description: "It is nessasry for font end developer"},
{image: "assets/picture/user/nodejs.jpg", name: "Node-js", price: 60, description: "Server side language"},
{image: "assets/picture/user/react.jpg", name: "React", price: 50, description: "A framwork make your code more readble"},
];

router.get("/", (req, res)=>{
    res.render("user", {data: myData});
});

module.exports = router;