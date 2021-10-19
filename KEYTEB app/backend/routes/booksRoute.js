const express=require('express')
const expressAsyncHandler=require('express-async-handler')
const Book =require('../Models/Book')
const booksRoute=express.Router()


//Create a Book

booksRoute.post('/', expressAsyncHandler( async(req,res)=>{
    
    const newBook= req.body
     await Book.create(req.body)
    if(newBook){ 
        res.status(200);
        res.json(newBook)
    }else{
        res.status(403)
        throw new Error ('Book creating is failed')}
}))
  

//fetch books
booksRoute.get('/', expressAsyncHandler( async(req,res)=>{
    
    const book=  await Book.find({})
    if(book){ 
        res.status(200);
        res.json(book)
    }else{
        res.status(403)
        throw new Error ('The are no books')}
}))

//find a book 
booksRoute.get('/:id', expressAsyncHandler( async(req,res)=>{
    
    const product=  await Book.findById(req.params.id);
    if(product){ 
        res.status(200);
        res.json(product)
    }else{
        res.status(400)
        throw new Error ('The are no books')}
}))


//update a book 
booksRoute.put('/:id' ,  expressAsyncHandler(async(req,res)=>{
    const book= await Book.findById(req.params.id)

    if (book){
        const updateBook =await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
                runValidators:true
            }
        )
         res.status(202).json(updateBook)

    }else{
        res.status(500)
        throw new Error('update failed')
    }
}))

//Delete a book 
 
booksRoute.delete('/:id' , expressAsyncHandler(async(req,res)=>{
   try {
    const book= await Book.findByIdAndDelete(req.params.id)   
    res.status(203).send('book is deleted')
   } catch (error) {
      res.json(403) 
   }  
}))

module.exports=booksRoute