/*
 * @message: 
 * @Author: lzh
 * @since: 2019-11-01 11:09:27
 * @lastTime: 2019-11-01 15:48:41
 * @LastAuthor: Do not edit
 */
const express = require("express")
const router = express.Router()
const { User } = require("../mongodb/schema/register.js")

// 查询用户列表，方便查看， 用于测试
router.get("/users", async (req, res) => {
    const users = await User.find();
    res.send(users)
})

// 清除数据库中 users 表; 用于测试
// User.db.dropCollection("users");

router.post("/register", async (req, res) => {
    // console.log(req.body);
    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.send({
        code: 0,
        data: {
            message: "注册成功",
            user
        }
    })
})

module.exports = router