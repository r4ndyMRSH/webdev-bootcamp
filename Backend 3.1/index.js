import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    //console.log(req.rawHeaders);
    res.send("<h1>Hello!</h1>");
});

app.get("/home/", (req, res) =>{
    res.send("<h1>Home Page</h1><p>Hello, there!</p>");
});

app.get("/contacts/", (req,res)=>{
    res.send("<h1>Contacts</h1><ul><p>You can reach me here</p><li>email</li><li>phone</li><li>adress</li></ul>")
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}.`);
});
