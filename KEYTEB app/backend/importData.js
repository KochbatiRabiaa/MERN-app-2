require('dotenv').config()

const booksData= require('./Data/booksData')
const book =require('./Models/Book')
const connect=require('./connectDB/connect')

connect()


const importData= async ()=>{
try {
    await book.deleteMany({})
    await book.insertMany(booksData)
    console.log('data import success')
} catch (error) {
    console.error('data import failed');
    process.exit(1);
    
}
}




importData()