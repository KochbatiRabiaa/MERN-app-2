
const mongoose= require('mongoose')
const bcrypt=require('bcryptjs')


const userShema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
})


//Populating books the user created it
/*userShema.virtual('books' , {
    ref : 'book',
    foreignField: 'createdBy',
    localField:'_id'
}); 
userShema.set('toJSON' , {virtuals : true})*/

//Hashing password
userShema.pre('save', async function(next){
    const salt= await bcrypt.genSalt(10);
    this.password=  await bcrypt.hash(this.password , salt)
    next()
})


//verify password 
userShema.methods.isPasswordMatch = async function(enteredPassword){
    return await  bcrypt.compare(enteredPassword, this.password)
}

const User=mongoose.model('User', userShema)

module.exports =User