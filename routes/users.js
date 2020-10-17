const express = require('express');

const router = express.Router();

const User = require('../modals/user');

// GET BACK ALL THE USERS data //
router.get('/', async (req,res) =>{
 try{
  const users = await User.find();
  res.json(users)
 }catch(err){
  res.json({message: err});
 }
 res.end();
});

// send user data //
router.post('/',async (req,res) => {
 const user = new User({
  name: req.body.name,
  email: req.body.email,
  message: req.body.message
 });

 try{

  const savedUser = await user.save()
 res.json(savedUser);
 }catch(err){
   res.json({message: err});
 }
 
});

// get a specific post //
router.get('/:postId',async (req,res) => {
 try {
  const user = await User.findById(req.params.postId);
  res.json(user);
 }catch(err) {
  res.json({message: err});
 }

});

// delete a specific user //
router.delete('/:postId',async (req,res) => {
  try {
   const removeUser = await User.remove({_id : req.params.postId});
   res.json(removeUser)
  }catch(err){
   res.json({message: err});
  }
})


module.exports = router;