const express = require('express');
const bodyParser = require('body-parser');
const shoeRouter = express.Router();
const mongoose=require('mongoose');
const Shoes=require('../models/shoes');


shoeRouter.use(bodyParser.json());

shoeRouter.route('/')
.get((req,res,next) =>{
   
    return Shoes.find({})
     .then((shoes) =>{
         res.statusCode=200;
         res.setHeader('Content-Type','application/json');
         res.json(shoes);
     },(err)=>next(err))
     .catch((err)=>next(err));
})
.post((req,res,next) =>{
    return Shoes.create(req.body)
     .then((shoe)=>{
       console.log('Shoe creted:',shoe);
        res.setHeader('Content-Type','application/json');
        res.json(shoe);
     },(err)=>next(err))
      .catch(err=>next(err));  
})
.put((req,res,next) =>{
    res.statusCode=403;
    res.end('put operation is forbidden!')
})
.delete((req,res,next) =>{
    return Shoes.remove({})
     .then((resp)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
     },(err)=>next(err))
      .catch(err=>next(err)); 
});

shoeRouter.route('/:shoeId')
.get((req,res,next) =>{
    Shoes.findById(req.params.shoeId)
     .then((shoe) =>{
         res.statusCode=200;
         res.setHeader('Content-Type','application/json');
         res.json(shoe);
     },(err)=>next(err))
      .catch((err)=>next(err));
})
.post((req,res,next) =>{
    res.statusCode=403;
    res.end('POST operation is forbidden!');
 })
.put((req,res,next) =>{
    Shoes.findByIdAndUpdate(req.params.shoeId,{ $set : req.body},{ new : true })
     .then((shoe) =>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(shoe);
     },(err)=>next(err))
      .catch((err)=>next(err));
})
.delete((req,res,next) =>{
    Shoes.findByIdAndRemove(req.params.shoeId)
     .then((resp) => {
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(shoe);
     },(err)=>next(err)) 
      .catch((err)=>next(err));
});
module.exports = shoeRouter;

