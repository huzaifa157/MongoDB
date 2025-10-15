const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose")
const chat = require("./models/chatting")
const methodOverride = require("method-override");

main()
    .then(() => console.log("MongoDB Connection Successful"))
    .catch((err) => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chat');
}

app.set("views", path.join(__dirname , "views"));
app.set("view engine" , "ejs")
app.use(express.urlencoded ({extended : true}))
app.use(methodOverride('_method'))

app.get("/", (req,res)=>{
    res.send("root is working")
})


app.get("/chats" , async (req,res)=>{
    let conversation = await chat.find();
    console.log(conversation);
    res.render('index.ejs' , {conversation})
})

// new chat 

app.get("/chats/new", (req,res)=>{
    res.render("new")
})

app.post("/chats", async (req, res) => {
  const { from, to, msg } = req.body;
  await chat.create({ from, to, msg, createdAt: new Date() });
  res.redirect("/chats");
});

// edit 

app.get("/chats/:id/edit" , async (req,res)=>{
    let {id} = req.params;
    const  chatData = await chat.findById(id);
    res.render("edit" , {chatData});
})

app.put("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    const {from, to, msg} = req.body;
    await chat.findByIdAndUpdate(id, {from, to, msg});
    res.redirect("/chats")
})




app.delete("/chats/:id" , async (req,res)=>{
    let {id} = req.params;
    let deleted = await chat.findByIdAndDelete(id);
    res.redirect("/chats")

})







app.listen(8080, ()=>{
    console.log("serving is listing on 8080")
})