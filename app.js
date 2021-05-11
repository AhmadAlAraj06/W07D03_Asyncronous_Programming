const express = require("express")
app = express()
port = 3000
app.use(express.json());

//1)
const fs = require("fs");
const axios = require("axios");


//2)
const readFile = () => {
let content;
fs.readFile("./data.txt", (err,data) =>{
    if(err)throw err;
    content = data.toString();
    console.log(content)
});
return content
};
readFile()

app.get("/",(req,res)=>{
    res.status(200)
    res.json(`Server is working.....`)
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  