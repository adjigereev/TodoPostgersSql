const {uploadFile} = require('../db/todo.model')

class Upload {
    async uploadFileServer(req, res) {
        const newFile = await uploadFile.create({
            fileScr: req.file.filename,
            CommentId:req.body.CommentId
        })
        console.log(typeof req.file.filename)
        try {
            res.status(201).json(newFile)

        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

module.exports = new Upload()