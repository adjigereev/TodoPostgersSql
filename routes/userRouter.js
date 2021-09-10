let express = require('express');
let router = express.Router();
let User = require('../controllers/usersController')
let {userName,checkUser} = require('../middleware/authmiddleware')
router.post('/registration',userName, User.registration);
router.post('/login', User.login);
router.get('/check', checkUser,User.check);
module.exports = router;
