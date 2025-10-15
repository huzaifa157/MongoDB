app.get("/chats" , async (req,res)=>{
    let conversation = await chat.find();
    console.log(conversation);
    res.render('index.ejs' , {conversation})
})


