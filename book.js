const mongoose = require('mongoose');

main()
    .then(() => console.log("✅ MongoDB Connection Successful"))
    .catch((err) => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Amazon');
}

const bookScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    author: {
        type: String,
    },

    price: {
        type: Number,
    },
    category: {
        type: String,
        enum: ["fiction" , "non fiction"],
    },

});

// make model for forming collection 

const Book = mongoose.model("Book", bookScheme);

let book1 = new Book({
    title: "Mathematics X11",
    author: "Asim Munir",
    price: 100000,
})

book1.save().then((res)=>console.log(res));
