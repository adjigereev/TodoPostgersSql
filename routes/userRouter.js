let express = require('express');
let router = express.Router();
let User = require('../controllers/usersController')
let {userName} = require('../middleware/authmiddleware')
router.post('/registration',userName, User.registration);
router.post('/login', User.login);
module.exports = router;
