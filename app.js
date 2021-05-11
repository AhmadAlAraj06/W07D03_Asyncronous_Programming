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




//3)
const writeFile = () => {

    fs.writeFile("text.txt", " A new file has been created", (err) => {

        if (err) throw err;
        
        console.log("The file has been created");
        
    });
};
writeFile()



//4)
const getPost = (id) => {
    axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)

    .then((response) => {
        console.log(response.data);
    })

    .catch((err) => {
        throw err;
    });
};
getPost(1);
getPost(50);



//5)
const getPostAsync = async(id) => {

    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        console.log(response.data);
    } catch (err) {
        console.log("ERROR IS:", err);
    }
};
getPostAsync()



app.get("/",(req,res)=>{
    res.status(200)
    res.json(`server is woooooorking`)
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  