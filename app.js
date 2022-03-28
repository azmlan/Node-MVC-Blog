const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routes/blogRoutes');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
// connect to mongodb
// Using .env file
const dbURI = process.env.DB;

mongoose.connect(dbURI)

.then((result)=> app.listen(3000) )
.catch((err)=>{console.log("Err",err);})

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'));

app.get('/',(req,res)=>{
  res.redirect('/blogs')
});
app.get('/about-ar',(req,res)=>{
  res.redirect('/about');
});
app.get('/about',(req,res)=>{
    res.render('about');
  });
app.use('/blogs',router);
// 404 page
// app.use is should be at the bottom of the roures
app.use((req,res)=>{
  console.log(req.url);
res.status(404).render('404');
});

