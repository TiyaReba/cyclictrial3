// 1.Import mongoose
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://tiya:mongo24@cluster0.qh8z9se.mongodb.net/ReactMST?retryWrites=true&w=majority")
// 2.Schemma initialising
let Schema = mongoose.Schema

// 

// 3.creating schema 
const movieSchema = new Schema({
            moviename:String,
            actor:String,
            actress:String,
            director:String,
            releaseyear:Number,
            camera:String,
            producer:String,
            language:String
        }
)
 
// 4.conveerting schema to model

var movieModel = mongoose.model("movies",movieSchema);

// 5.Exporting model

module.exports={movieModel}