var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require("mongoose")
const {Mongoose}=require("mongoose")
mongoose.connect("mongodb+srv://hassan_051:Garrison12@cluster0.lgbzf.mongodb.net/test",{useNewUrlParser:true,useUnifiedTopology: true })
.then(()=>console.log("Connected to Mongo"))
.catch((err)=>console.log(err.message))
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.post("/index",async(req,res)=>{
  try{
        const user=req.body.username;
        const pass=req.body.password;
        console.log(`${user} and password is ${pass}`)
  }catch(error){
    res.status(400).send("Invalid User")
  }
})
module.exports = app;
