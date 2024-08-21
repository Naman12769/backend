const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },

  email:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    select:false,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now()
  }
});
module.exports=new mongoose.model("user",userSchema);
