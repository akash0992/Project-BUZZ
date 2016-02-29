'use strict';

var express = require('express');
var controller = require('./post.controller');

var router = express.Router();

var auth =require('../../auth/auth.service');

router.get('/', controller.index);/*
router.get('/:id', controller.show);*/


router.get('/:id',controller.indexGet);
router.get('/category/:id/:skip', controller.indexCategory);

//router.post('/',controller.create);

router.post('/',auth.isAuthenticated(),function(req,res,next){
  if(!req.file){
    next();
  }
  else if(req.file.mimetype == 'image/jpeg' || req.file.mimetype == 'image/jpg' ||req.file.mimetype == 'image/png'){
    next();
  }else{
    res.send({ result: 0, err : 'file type wrong'});
  }
}, function(req, res, next){
  var createdBy = {
    uId : req.user._id,
    uName : req.user.name,
    uImgUrl : req.user.google.image.url
  }
  req.body.createdBy = createdBy;
  if(req.file)
    req.body.mUrl = '/static-image/'+req.file.filename;
  next();
}, controller.create);

router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
