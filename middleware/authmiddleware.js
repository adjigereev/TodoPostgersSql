const user = require('../db/user.model')



let userName = async (req, res, next) => {
    console.log(user)
    let userSelect = await user.findOne({where : {login: req.body.login}})
    if (userSelect) return res.status(400).json("Пользователь с таким логином уже существует в бд ")
    next()
}

module.exports = {
    userName
}
