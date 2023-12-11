const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Registrations",{

    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log("no MongoDB connection");
})
