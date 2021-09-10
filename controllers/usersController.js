require('dotenv').config()
const user = require('../db/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const generatorToken = (id, login) => {
    return jwt.sign(
        {id, login},
        process.env.SEKRET_KEY,
        {expiresIn: "24h"}
    )
}

class User {
    async registration(req, res) {
        const hashPassword = await bcrypt.hash(req.body.password, 7)
        const newUser = user.create({
            login: req.body.login,
            password: hashPassword
        })
        const token = await generatorToken(newUser.id, newUser.login)
        try {
            res.status(201).json(token)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async login(req, res) {
        const {login, password} = req.body
        const userSelect = await user.findOne({where: {login}})
        if (!userSelect) return res.status(401).json('Пользователь не найден')
        const hashPassword = bcrypt.compareSync(password, userSelect.password)
        if (!hashPassword) return res.status(401).json('Пароль не верный')
        const token = await generatorToken(userSelect.id, userSelect.login)
        res.json(token).status(300)
        console.log(req.user)
    }
    async check(req,res){
        res.json("Путь до check работает").status(201)
    }
}

module.exports = new User()