const mongoose=require("mongoose")
const ecomSchema=mongoose.Schema({
    pid:Number,
    pname:String,
    pdesc:String,
    pprice:Number,
    pcategory:String,
    pimage:String
    
})
module.exports=mongoose.model("products",ecomSchema)