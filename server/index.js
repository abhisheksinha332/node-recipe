import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import recipeRoutes from './routes/recipe.js'

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(cors())


app.use('/recipes', recipeRoutes)
 

const PORT = process.env.PORT || 5000;


// app.get('/', (req, res) => {
//   res.send('This is Abhishek Sinha ')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// }
// )
mongoose.connect("mongodb+srv://abhishek:myPassword@cluster0.h1ilh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser:true, useUnifiedTopology:true})
.then(() => app.listen(PORT, ()=> {console.log("server running on port: 5000")})) 
.catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify',false)