let express = require('express');
let router = express.Router();
let Comment = require('../controllers/commentController')
/* GET users listing. */
router.post('/', Comment.addComment);
module.exports = router;
