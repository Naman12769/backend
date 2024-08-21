const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({

  title:{
    type:String,
    unique:true
  },
  description:{
    type:String,
    required:true
  },
  iscompleted:{
    type:Boolean,
    default:false
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
  createdAt:{
    type:Date,
    default:Date.now()
  }
});
module.exports=new mongoose.model("task",taskSchema);
