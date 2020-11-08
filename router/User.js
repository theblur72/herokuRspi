var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
    stdNumb:String,
    stdName:String,
});
mongoose.model('stdInfo', UserSchema);
module.exports = mongoose.model('stdInfo');
