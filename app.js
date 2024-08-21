const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const userrouter=require('./routes/user');
const taskrouter=require('./routes/task.js');
const connectDB=require('./data/database.js');
const {config}=require('dotenv');
const cookieParser = require('cookie-parser');
const { errorMiddleWare } = require('./middlewares/error.js');
config({
  path:"./data/config.env"
})
connectDB();
const app=express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:[process.env.FRONTEND_URI],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}));
app.use('/api/v1/user',userrouter);
app.use('/api/v1/task',taskrouter);

// const router=express.Router();
// router.


// const User=mongoose.model("user",schema);
app.get('/',(req,res)=>{
  res.send("this is fine!");
})


app.listen(process.env.PORT,()=>{
  console.log(`server is listening on port ${process.env.PORT}`);
})

app.use(errorMiddleWare);