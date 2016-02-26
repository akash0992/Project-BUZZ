'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  category:{type:String, default:'BUZZ'},//['BUZZ','LAF']
  dateCreated:String,
  //lastUpdated:{type:Number, default: Date.now()},
  //status: String,//['PUBLISHED','DRAFT']
  //header: String,
  content: String,
  //lastContent: String,
  //viewed: {type:Number, default: 0},
  mUrl : String,
  //uId : String,
  createdBy: {
    uId : String,
    uName:String,
    uImgUrl:String
  }
 // contentHtml: String,
 // active: Boolean//Only admin can change it
});

module.exports = mongoose.model('Post', PostSchema);
