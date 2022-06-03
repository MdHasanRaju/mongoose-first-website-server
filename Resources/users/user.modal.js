const mongoose = require('mongoose')

const userSchema = new mongoose.Schema (
    {
        name:{
            type:String,
            maxLength:[30, 'name can not be more than 30 characters'],
            required:[true, 'please add a name']
        },
        age:{
            type:Number,
            maxLength:[3, 'age can not be more than 3 digits'],
            required:[true, 'please add your age']
        },
        phone:{
            type:Number,
            required:[true, 'please your number']
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Please add an email'],
        },
        address:{
            type:String,
            required:[true, 'please enter your address'],
        },
        photoURL:{
            type:String,
        },
    }
)

module.exports = mongoose.model('User', userSchema);