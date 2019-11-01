/*
 * @message: 
 * @Author: lzh
 * @since: 2019-11-01 10:45:16
 * @lastTime: 2019-11-01 15:38:51
 * @LastAuthor: Do not edit
 */
const express = require("express")
const app = express()
const port = 3000
const BASE_URL = "/api" // 根路径
require("./mongodb/db.js") // 引入数据库

// 允许客户端提供过来的json数据 注意要在路由之前
app.use(express.json())

app.get("/", () => console.log("hello world"))
// api
const register = require("./router/register.js")
// 路由中间件
app.use(BASE_URL, register);

//开启服务器监听
app.listen(port, () => console.log(`http://localhost:${port}`))