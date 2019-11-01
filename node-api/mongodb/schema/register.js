/*
 * @message: 注册数据模型
 * @Author: lzh
 * @since: 2019-11-01 11:42:00
 * @lastTime: 2019-11-01 14:50:10
 * @LastAuthor: Do not edit
 */
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const user_info = new Schema({
    username : { type: String, unique: true },
    password: { type: String }
})

const SchemaModule = {
    User: mongoose.model('user_info',user_info)
}

module.exports = SchemaModule 