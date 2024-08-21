import express from "express";
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"
import testRoute from "./routes/test.route.js"
import userRoute from "./routes/user.route.js"
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js"; 

import cors from "cors";
import cookieParser from "cookie-parser";


const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:'https://real-estate-kwif.vercel.app', credentials:true})) //passing client side url

app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)  
app.use("/api/auth",authRoute)
app.use("/api/test",testRoute)
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(8800, ()=>{
    console.log("server is running");
})