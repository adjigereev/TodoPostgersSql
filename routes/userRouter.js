let express = require('express');
let router = express.Router();
let User = require('../controllers/usersController')
let {userName} = require('../middleware/authmiddleware')
router.post('/registration',userName, User.registration);
module.exports = router;
