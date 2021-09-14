require('dotenv').config()
const user = require('../db/user.model')
const jwt = require('jsonwebtoken')


let userName = async (req, res, next) => {
    let userSelect = await user.findOne({where: {login: req.body.login}})
    if (userSelect) return res.status(400).json("Пользователь с таким логином уже существует в бд ")
    next()
}

let checkUser = async (req, res, next) => {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) return res.status(401).json('Вы не авторизованны')
        const decode = jwt.verify(token, process.env.SEKRET_KEY)
        req.user = decode
        next()
    } catch (e) {
        return res.status(401).json('Вы не авторизованны')
    }
}

const checkRestriction = (table) => {
    return async function (req, res, next) {
        const UserIdTable = await table.findOne({where: {id: req.params.id}})
        if (UserIdTable.UserId === req.user.id) {
            next()
        } else {
            res.json("У вас нет прав").status(403)
        }
    }
}

module.exports = {
    userName,
    checkUser,
    checkRestriction
}
