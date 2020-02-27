const express = require("express");
const body_parser = require("body-parser");
const nedb = require("nedb");
const url_encoded_body_parser = body_parser.urlencoded({extended: false});
const router = express.Router();
const database = new nedb("user_account.db");
database.loadDatabase();

const myData = [];

router.get("/", function(req, res){
    myData[0] = "Please fill all the infomation to create a account";
    myData[1] = ""
    res.render("registration", {data: myData});
});

router.post("/", url_encoded_body_parser, function(req, res){
    const acc = req.body.account;
    const pas = req.body.passport;
    const con = req.body.confirm;
    const errors = [];
    if(pas.length < 8){
        myData[0] ="";
        myData[1] = "The passport require loger than 8"
        res.render("registration", {data: myData});
    } else if(con !== pas){
        myData[0] ="";
        myData[1] = "Confirmation need to be same as passport";
        res.render("registration", {data: myData});
    } else{
        const user_info = {
        account: acc,
        passport: pas,
        }
        database.insert(user_info);
        res.redirect("/home");
    }
});
module.exports = router;
    // if (pas < 8){
    //     errors.push("The length of passport can not less than 8");
    // } else if(pas !== con){
    //     errors.push("The confirm is diffrent from passport");
    // } else{
    //     const data = {
    //         account: acc,
    //         passport: pas,
    //         confirm: con
    //     }
    //     console.log(data);
    // }
    // database.insert(data);
    // console.log("work");
    // res.render("home");
// }