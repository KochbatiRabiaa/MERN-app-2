const express=require('express')

 const usersRoute=express.Router()
 const User =require('../Models/Users')
 const asyncHandler=require('express-async-handler');
const generateToken = require('../generateToken/generateToken');
const authMiddlware = require('../Midllewares/authMidlware')


 //Register
usersRoute.post('/register' ,asyncHandler( async(req, res)=>{

        const {name, email, password}=req.body
        const userExist=await User.findOne ({ email: email}) ;
        if (userExist){
            throw new Error('User is already exist')
        }
        const userCreated= await User.create ({name,email,password})
        res.json ({
            _id: userCreated._id,
            name:userCreated.name,
            email:userCreated.email,
            password:userCreated.password,
            token:generateToken(userCreated._id )
        })
     }));
    

        
//Login    
usersRoute.post('/login' ,asyncHandler(async (req, res)=>{
    const {email, password}=req.body
    const user=await User.findOne({email})
    if(user &&  (await user.isPasswordMatch(password))){
        res.status(200)
        res.json ({
            _id: user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            token:generateToken(user._id )
        })
    }else {res.status(402)
    throw new Error ('Invalid Login credentials')}
    }));



//Update
usersRoute.put(  '/profile/update/:id', asyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        //This will encrypt automatically in our model
        if (req.body.password) {
          user.password = req.body.password || user.password;
        }
        const updateUser = await user.save();
        res.json({
          _id: updateUser._id,
          name: updateUser.name,
          password: updateUser.password,
          email: updateUser.email,
          token: generateToken(updateUser._id),
        }, 'Your profile is successfully apdated');
      } else {
        res.status(401);
        throw new Error('User Not found');
      }
    })
  );
  
    
    //Fetch users
    usersRoute.get('/' ,asyncHandler( async(req,res)=>{
    
        const newUser=  await User.find({})
        if(newUser){ 
            res.status(200);
            res.json(newUser)
        }else{
            res.status(403)
            throw new Error ('The are no users')}
        }))


        
//GET PROFILE

usersRoute.get(
    '/profile/:id', authMiddlware,

    asyncHandler(async (req, res) => {
      try {
       const user = await User.findById(req.params.id)
     
      //  if (!user) throw new Error(`You don't have any profile yet`);
        res.status(200);
        res.send(user);
      } catch (error) {
        res.status(500);
        throw error;
      }
    })
  );


  //Delete user
  usersRoute.delete('/:id' , asyncHandler(async(req,res)=>{
    try {
     const user= await User.findByIdAndDelete(req.params.id)   
     res.status(203).send('user is deleted')
    } catch (error) {
       res.json(403) 
    }  
 }))
     module.exports=usersRoute