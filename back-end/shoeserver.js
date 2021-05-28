const express = require('express');
const fs = require('fs');
var cors = require('cors')

const app = express();

app.use(cors()) 





app.get('/shoesinfo', (req, res)=>{
    fs.readFile(__dirname+'/shoes.json', 'utf8', (err, data)=>{
        console.log(data);
        res.end(data);
    })
});

app.get('/shoes', (req, res)=>{
    fs.readFile(__dirname+'/shoesinfo.json', 'utf8', (err, data)=>{
        console.log(data);
        res.end(data);
    })
})

app.listen(8080, ()=>{
    console.log("Server started");
})