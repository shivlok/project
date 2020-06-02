const express = require('express');
const bodyParser = require('body-parser');
const shoeRouter = express.Router();

shoeRouter.use(bodyParser.json());

shoeRouter.route('/').all((req,res,next) =>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('will send all the shoe to you')
})
.post((req,res,next) =>{
    res.end('will add shoe :' + req.body.name + ' with description :' + req.body.description)
})
.put((req,res,next) =>{
    res.statusCode=403;
    res.end('put operation is forbidden!')
})
.delete((req,res,next) =>{
    res.end('will delete all the shoes')
});
module.exports = shoeRouter;

