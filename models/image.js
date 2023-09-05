const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
    imagen:{
        type:Buffer,
        required:true,
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Image',userSchema)