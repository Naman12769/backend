const User=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { sendCookie } = require('../utils/features');
exports.getAllusers=async(req,res)=>{
  const user=await User.find({});
  // console.log(req.query);
  // const keyword=req.query.keyword;
  // console.log(keyword);
  res.json({
    success:true,
    data:user
  })
}

exports.register=async(req,res)=>{
  const {name,email,password}=req.body;
  let user=await User.findOne({email});
  // console.log(req.query);
  // const keyword=req.query.keyword;
  // console.log(keyword);
  if(user){
    return res.status(404).json({
      success:false,
      message:"user already exists"

    })
  }
  const hashedPassword=await bcrypt.hash(password,10);

  await User.create({name,email,password:hashedPassword});
  sendCookie(user,res,"registered successfully!",201);
 
}
exports.login=async(req,res)=>{
  const {email,password}=req.body;
  const user=await user.findOne({email}).select("+password");
  if(!user){
    return res.status(404).json({
      success:false,
      message:"invalid email and password"
    })
  }
  const ismatch=await bcrypt.compare(password,user.password);
  if(!ismatch){
    return res.status(404).json({
      success:false,
      message:"invalid email and password"
    })
  }
  sendCookie(user,res,"welcome back!",200);
}
exports.getMyProfile=async(req,res)=>{
  

  // console.log(token);

  res.status(200).json({
    success:true,
    user:req.user
  })
}
exports.updateUser=async(req,res)=>{
  const {id}=req.params;
  const user=await User.findById(id);
  res.json({
    success:true,
    message:"user updated"
  })
}
exports.deleteUser=async(req,res)=>{
  const {id}=req.params;
  const user=await User.findById(id);
  user.deleteOne();
  res.json({
    success:true,
    message:"user deleted"
  })
}
exports.logout=(req,res,next)=>{
res.status(200).cookie("token","",{
  expires:new Date(Date.now())
}).json({
  success:true,
  user:req.user
})
}