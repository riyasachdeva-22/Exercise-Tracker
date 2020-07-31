const router=require('express').Router();
let User=require('../models/user.model');//mongoose model recently created
//ist route in point
router.route('/').get((req,res)  => {
    User.find()// mongooose method returns promise in json format
    .then(users=> res.json(users))
    .catch(err =>res.status(400).json('Error:' +err));

});
//2nd  in route
  router.route('/add').post((req,res)=>{
      const username=req.body.username;
      const newUser=new User({username});
      newUser.save() // in mongosb db if saved
      .then(()=>res.json('User added'))
      .catch(err =>res.status(400).json('Error: '+err));

  }
  );
  
  module.exports=router;
  
    