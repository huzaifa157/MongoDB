const mongoose = require("mongoose")
const chat = require("./models/chatting")

main()
    .then(() => console.log("MongoDB Connection Successful"))
    .catch((err) => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chat');
}


let Allchat = [

    {
    from: "isra",
    to: "huzaifa",
    msg: "send me the dbms notes",
    createdAt: new Date(),
   },

  {
    from: "isra",
    to: "huzaifa",
    msg: "I’m fine, thank you!",
    createdAt: new Date()
  },


  {
    from: "huzaifa",
    to: "isra",
    msg: "Did you complete the DBMS assignment?",
    createdAt: new Date()
  },


  {
    from: "isra",
    to: "huzaifa",
    msg: "Almost done! I’ll send it soon.",
    createdAt: new Date()
  },


  {
    from: "huzaifa",
    to: "isra",
    msg: "Okay great 👍",
    createdAt: new Date()
  }

]
chat.insertMany(Allchat);






