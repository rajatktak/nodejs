var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Need User name']
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;