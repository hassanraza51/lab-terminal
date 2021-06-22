const mongoose=require("mongoose")

const loginSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});
const loginModel=mongoose.model("Login",loginSchema)
module.exports=loginModel