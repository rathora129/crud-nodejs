const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/crudapps", {
}).then(() => {
    console.log("connection is successful")
}).catch((e) => {
    console.log("error")
})