const express = require('express');
const app = express();

app.set("view engine","ejs");

app.get("/",function (req,res){
    const items = [
        {
            title: "D",
            message: "Teste"
        },
        {
            title: "E",
            message: "Teste"
        },
        {
            title: "M",
            message: "Teste"
        },
        {
            title: "A",
            message: "Teste"
        },
        {
            title: "I",
            message: "Teste"
        },
        {
            title: "S",
            message: "Teste"
        },
    ];

    res.render("pages/index",{
        qualitys:items,
    });
    
})

app.get("/sobre",function (req,res){
    res.render("pages/about");
})

app.listen(8080);
console.log("listening");