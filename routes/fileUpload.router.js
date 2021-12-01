let express = require('express');
let router = express.Router();
let Upload = require('../controllers/uploadFileController')
let upload = require('../middleware/uploadmiddleware')
router.post('/', upload.single('file'), Upload.uploadFileServer)


module.exports = router;
