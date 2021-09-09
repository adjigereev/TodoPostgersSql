const user = require('../db/user.model')
const  bcrypt = require('bcrypt')
class User {
    async registration(req, res) {
        const hashPassword = await bcrypt.hash(req.body.password,7)
        const newUser = user.create({
            login:req.body.login,
            password:hashPassword
        })
        try{
            res.status(201).json(newUser)
        }catch (e) {
            res.status(500).json(e.message)
        }
    }

    async login(req, res) {

    }
}

module.exports = new User()