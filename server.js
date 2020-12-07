const express = require('express')
const mongoose = require('mongoose')
const Prison = require('./models/prison')

const prisonRouter = require('./routes/prisons')
const app = express()

mongoose.connect('mongodb://localhost/prisondb', { 
useNewUrlParser: true,  useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))


app.get('/', async (req, res) => {


    const prisons = await Prison.find()

    res.render('prisons/index', {prisons: prisons})

        

})

app.use('/prisons', prisonRouter)


app.listen(5000)