const ErrorHandler = require('../middlewares/error');
const task = require('../models/task');
const Task=require('../models/task');
exports.newTask=async(req,res,next)=>{

try {
  const {title,description}=req.body;
const task=await Task.create({title,description,user:req.user});
res.status(201).json({
  success:true,
  message:"task created successfully"
})
} catch (error) {
  next(error);
}

}
exports.getMyTask=async(req,res)=>{
try {
  const userid=req.user._id;
const tasks=await Task.find({user:userid});
res.status(201).json({
  success:true,
  tasks
})
} catch (error) {
  next(error);
}
}
exports.updateTask=async(req,res)=>{
  try {
    const {id}=req.params;
  const task=await Task.find(id);
  if(!task){
    return next(new ErrorHandler("task not found!",404))
   }
  task.iscompleted=!task.iscompleted;
  await task.save();
  res.status(201).json({
    success:true,
    message:"task updated"
  })
  } catch (error) {
    next(error);
  }
  }
  exports.deleteTask=async(req,res)=>{
   try {
    const {id}=req.params;
  const task=await Task.find(id);
  if(!task){
    return next(new ErrorHandler("task not found!",404))
   }
  task.iscompleted=!task.iscompleted;
  await task.save();
  res.status(201).json({
    success:true,
    message:"task updated"
  })
   } catch (error) {
    next(error);
   }
    }