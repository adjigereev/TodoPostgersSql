let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const sequelize = require('./db/config')
let indexRouter = require('./routes/index');


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);



sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("Сервер запущен");
        console.log('Бд подключена');
    })
})

