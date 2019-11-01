/*
 * @message: 注册数据模型
 * @Author: lzh
 * @since: 2019-11-01 11:42:00
 * @lastTime: 2019-11-01 15:49:04
 * @LastAuthor: Do not edit
 */
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt") // 散列

/**
 * set(val) {return xx}
 * 表示将密码进行处理后再往数据库存
 */
const user_info = new Schema({
    username : { type: String, unique: true },
    password: { 
        type: String, 
        set(val) {
            return bcrypt.hashSync(val, 10)
        } 
    }
})

const SchemaModule = {
    User: mongoose.model('user_info',user_info)
}

module.exports = SchemaModule 