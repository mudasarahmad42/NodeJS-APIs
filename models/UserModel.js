const mongoose = require ('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true, 
    },
    email: {
        type: String,
        require: true, 
    },
    password: {
        type: String,
        require: true, 
        min : 6,
        max: 1024
    },
});

module.exports = mongoose.model('User' , userSchema);