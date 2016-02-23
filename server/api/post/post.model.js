'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  category:{type:String, default:'BUZZ'},//['BUZZ','LAF']
  dateCreated:{type:Number, default: Date.now()},
  lastUpdated:{type:Number, default: Date.now()},
  status: String,//['PUBLISHED','DRAFT']
  header: String,
  content: String,
  lastContent: String,
  viewed: {type:Number, default: 0},
  media:{
    category:{type:String,default:'IMAGE'},//['VIDEO','IMAGE']
    url:String
  },
  createdBy: {
    id:String,
    name:String,
    email:String
  },
 // contentHtml: String,
  active: Boolean//Only admin can change it
});

module.exports = mongoose.model('Post', PostSchema);
