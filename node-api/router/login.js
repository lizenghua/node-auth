/*
 * @message: 
 * @Author: lzh
 * @since: 2019-11-01 15:40:39
 * @lastTime: 2019-11-01 16:23:04
 * @LastAuthor: Do not edit
 */
const express = require("express")
const router = express.Router()
const { User } = require("../mongodb/schema/register.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const TOKEN_KEY = "sfsafafafe" //秘钥，随便给个字符串; 在开发中，不建议体现在代码中，可以使用全局变量，被git忽略的文件里面

router.post("/login", async (req, res) => {
    // 校验用户名
    const user = await User.findOne({
        username: req.body.username
    })
    if(!user) {
        return res.status(422).send({
            message: "用户名不存在"
        })
    }
    // 校验密码
    const isPasswordValid = bcrypt.compareSync(req.body.password,user.password)// 比较密码
    if(!isPasswordValid) {
        return res.status(422).send({
            message: "密码无效"
        })
    }
    // 生成 token (无状态)
    const token = jwt.sign({id: String(user._id)},TOKEN_KEY)
    res.send({
        user,
        token
    })
})

module.exports = router