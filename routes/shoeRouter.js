const express = require('express');
const bodyParser = require('body-parser');
const shoeRouter = express.Router();
const mongoose=require('mongoose');
const Shoes=require('../models/shoes');
var authenticate=require('../authenticate');
const  cors  = require('./cors');


shoeRouter.use(bodyParser.json());

shoeRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) =>{
   
    return Shoes.find(req.query)
     .then((shoes) =>{
         res.statusCode=200;
         res.setHeader('Content-Type','application/json');
         res.json(shoes);
     },(err)=>next(err))
     .catch((err)=>next(err));
})
.post(cors.corsWithOptions,authenticate.verifyUser,(req,res,next) =>{
    return Shoes.create(req.body)
     .then((shoe)=>{
       console.log('Shoe created:',shoe);
        res.setHeader('Content-Type','application/json');
        res.json(shoe);
     },(err)=>next(err))
      .catch(err=>next(err));  
})
.put(cors.corsWithOptions,authenticate.verifyUser,(req,res,next) =>{
    res.statusCode=403;
    res.end('put operation is forbidden!')
})
.delete(cors.corsWithOptions,authenticate.verifyUser,(req,res,next) =>{
    return Shoes.remove({})
     .then((resp)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
     },(err)=>next(err))
      .catch(err=>next(err)); 
});

shoeRouter.route('/:shoeId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) =>{
    Shoes.findById(req.params.shoeId)
     .then((shoe) =>{
         res.statusCode=200;
         res.setHeader('Content-Type','application/json');
         res.json(shoe);
     },(err)=>next(err))
      .catch((err)=>next(err));
})
.post(cors.corsWithOptions,authenticate.verifyUser,(req,res,next) =>{
    res.statusCode=403;
    res.end('POST operation is forbidden!');
 })
.put(cors.corsWithOptions,authenticate.verifyUser,(req,res,next) =>{
    Shoes.findByIdAndUpdate(req.params.shoeId,{ $set : req.body},{ new : true })
     .then((shoe) =>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(shoe);
     },(err)=>next(err))
      .catch((err)=>next(err));
})
.delete(cors.corsWithOptions,authenticate.verifyUser,(req,res,next) =>{
    Shoes.findByIdAndRemove(req.params.shoeId)
     .then((resp) => {
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(shoe);
     },(err)=>next(err)) 
      .catch((err)=>next(err));
});
module.exports = shoeRouter;

