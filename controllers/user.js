const User=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { sendCookie } = require('../utils/features');
exports.getAllusers=async(req,res)=>{
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

exports.register=async(req,res)=>{
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
exports.login=async(req,res)=>{
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
exports.getMyProfile=async(req,res)=>{
  

  // console.log(token);

  try {
    res.status(200).cookie("token","",{
      expires:new Date(Date.now())
    }).json({
      success:true,
      user:req.user
    })
  } catch (error) {
    next(error);
  }
}
exports.updateUser=async(req,res)=>{
  try {
    res.status(200).cookie("token","",{
      expires:new Date(Date.now())
    }).json({
      success:true,
      user:req.user
    })
  } catch (error) {
    next(error);
  }
}
exports.deleteUser=async(req,res)=>{
 try {
  res.status(200).cookie("token","",{
    expires:new Date(Date.now())
  }).json({
    success:true,
    user:req.user
  })
 } catch (error) {
  next(error);
 }
}
exports.logout=(req,res,next)=>{
try {
  res.status(200).cookie("token","",{
    expires:new Date(Date.now()),
    sameSite:process.env.NODE_ENV==="Devlopment"?"lax":"none",
    secure:process.env.NODE_ENV==="Development"?false:true
  }).json({
    success:true,
    user:req.user
  })
} catch (error) {
  next(error);
}
}