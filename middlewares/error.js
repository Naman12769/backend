class ErrorHandler extends Error{
constructor(message,statusCode){
  super(message);

  this.statusCode=statusCode;
}
}
exports.errorMiddleWare=(err,req,res,next)=>{
  err.message=err.message || "Internel server error";
  err.statusCode=err.statusCode || 500;
  return res.status(err.statusCode).json({
    success:false,
    message:err.message
  })
}

// module.exports=ErrorHandler;