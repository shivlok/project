const mongoose=require('mongoose');
const Schema=mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency=mongoose.Types.Currency;


const shoeSchema=new Schema({
  color:{
      type:String,
      required:true,
      
  },
  image:{
      type:String,
      required:true
  },
  label:{
    type:String,
    required:true
  } ,
  price:{
      type:Currency,
      required:true,
      min:0
  },
  dimension:{
    type:String,
    default:''
  },
  description:{
    type:String,
    required:true
  },
  featured:{
    type:Boolean,
    default:false
 }
  },{
      timestamps:true
});

var Shoes=mongoose.model('Shoe',shoeSchema);
module.exports=Shoes;