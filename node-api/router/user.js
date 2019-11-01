/*
 * @message: 
 * @Author: lzh
 * @since: 2019-11-01 16:40:52
 * @lastTime: 2019-11-01 16:51:43
 * @LastAuthor: Do not edit
 */
const express = require("express")
const router = express.Router()
const { User } = require("../mongodb/schema/user.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const TOKEN_KEY = "sfsafafafe" //秘钥，随便给个字符串; 在开发中，不建议体现在代码中，可以使用全局变量，被git忽略的文件里面

router.post("/register", async (req, res) => {
    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.send({
        code: 0,
        message: "注册成功",
        user
    })
})

router.post("/login", async (req, res) => {
    // 校验用户名
    const user = await User.findOne({
        username: req.body.username
    })
    if(!user){
        return res.status(422).send({
            message: "用户名不存在"
        })
    }
    // 校验密码
    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
    if(!isPasswordValid) {
        return res.status(422).send({
            message: "密码无效"
        })
    }
    // 生成token
    const token = jwt.sign({id: String(user._id)},TOKEN_KEY)
    res.send({
        user,
        token
    })
})

// 查询用户列表，方便查看， 用于测试
router.get("/users", async (req, res) => {
    const users = await User.find();
    res.send(users)
})

// 清除数据库中 users 表; 用于测试
// User.db.dropCollection("users");

module.exports = router