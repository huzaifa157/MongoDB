const mongoose = require('mongoose');


main()
    .then(() => {
        console.log("connection succesful")
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userScheme = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,

});

// making collection (table)
const User = new mongoose.model("User", userScheme);

// const user1 = new User({
//     name: "Ali",
//     email: "ali@yahoo.pk",
//     age : 24,
// });

// user1.save();



// const user2 = new User({
//     name: "Atta",
//     email: "atta@yahoo.pk",
//     age : 24,
// });

// user2.save()
//    .then((res)=>console.log(res))
//    .catch((err)=> console.log(err));

// insert many at a time 

User.insertMany([
    {name: "tony" , email: "tony@gmail.com" , age:88},
    {name:"sameed", email:"sameed@gmail.com", age:21},
    {name: "hamza", email:"hamza@yahoo.agh" , age:30},
    
]).then((res)=> console.log(res))
   .catch((err)=> console.log(err));