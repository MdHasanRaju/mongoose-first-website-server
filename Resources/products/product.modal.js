const mongoose = require('mongoose');

const productSchema = new mongoose.Schema (
    {
        title:{
            type:String,
            maxLength:[50, 'title can not be more than 20 characters'],
            require:[true, 'please add a title']
        },
        description:{
            type:String,
            maxLength:[300, 'description can not be more than 300 characters '],
            require:[true, 'please add some description']
        },
        price:{
            type:Number,
            require:[true, 'please add a price']
        },
        rating:{
            type:Number,
        },

    }
)

module.exports =mongoose.model('Product', productSchema);