const express = require("express");
const app = express();
const body_parser = require("body-parser");
const url_encoded_body_parser = body_parser.urlencoded({extended: false});
const nedb = require("nedb");
const database = new nedb("user_account.db");
// const registration = require("./routes/registration.js");
const user = require("./routes/user.js");
const myData = [];

app.use(express.json({limit: "1mb"}));
// app.use("/registration",registration);
app.use("/user",user);
database.loadDatabase();

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/home", function(req, res){
    res.render("home");
});

app.post("/home", url_encoded_body_parser, function(req,res){
    const acc = req.body.account;
    const pas = req.body.passport;
    console.log("fds")
    database.find({"account": acc, "passport": pas}, function(err, docs){
        console.log("fds")
        if(docs.length >= 1){
            res.redirect("/user");
        } else {
            console.log("no");
        }
    });
})
////////////////////////////////
app.get("/registration", function(req, res){
    myData[0] = "Please fill all the infomation to create a account";
    myData[1] = ""
    res.render("registration", {data: myData});
});
app.post("/registration", url_encoded_body_parser, function(req, res){
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
////////////////////////////////
app.get("/introduction", function(req, res){
    res.render("introduction");
})

app.get("/aboutus", function(req, res){
    res.render("aboutus");
})

app.listen(3002);
console.log("Server is running ...");


// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Ronny0929",
//     database: "test"
// });

// connection.connect(function(err){
//     if(err) throw err;
//     else console.log("mysql createConnection connect..");
// });



// const mongodb = require("mongodb");
// const mongoClient = mongodb.MongoClient;
// const uri = "mongodb+srv://Ronny:Ronny123@@cluster0-iyngx.mongodb.net/test?retryWrites=true&w=majority";
// const client = new mongoClient(uri, { useUnifiedTopology: true });
// client.connect(err => {
//   if (err) throw err;
//   const collection = client.db("ronnyDatabase").collection("ronnyClection");
//   console.log("cllection created");
  
//   client.close();
// });
// client.connect(uri, function(err, db){
//   if(err) throw err;
//   console.log("database created..");
//   db.close();
// });