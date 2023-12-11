const express = require('express');
const path = require('path');
const app = express();
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


require("./db/conn");
const Register = require("./models/registers");
const {json} = require("express");
const port = process.env.PORT || 5000;

const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    res.render("index")
});


app.get("/register" , (req, res) => {
    res.render("register");
});

app.post("/register" , async (req, res) => {
    try{
        const registerEmployee = new Register({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            
        }) 
        const registered = await registerEmployee.save();



        res.status(201).render("login");

    }catch(e){
        res.status(404).send(e);
        console.log("the error aprt page");
    }
});

app.get("/login", (req, res) => {
    res.render("login");
});
app.post("/login",  async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});
        if(useremail.password === password){
            res.status(201).render("ack");
        }
        else{
            res.send("Incorrect password");
        }


    }catch(e){
        //console.log(e);
        res.status(404).send(e.message);
    }
});


app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});