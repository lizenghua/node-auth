/*
 * @message: 
 * @Author: lzh
 * @since: 2019-11-01 11:29:45
 * @lastTime: 2019-11-01 16:40:18
 * @LastAuthor: Do not edit
 */
const mongoose =require("mongoose")
const DB_URL = "mongodb://127.0.0.1:27017/auth"

// 链接数据库
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
// 连接成功
mongoose.connection.on("connected", () => {
    console.log("数据库连接成功");
    
})
// 连接异常
mongoose.connection.on("error", () => {
    console.log(`数据库连接出现异常,error:${error}`);
})

mongoose.connection.on("disconnected", () => {
    console.log("数据库连接断开");
})

module.exports = mongoose