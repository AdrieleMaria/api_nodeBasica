const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const userRoutes = require('./routes/user-routes')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})
.then(() => {
	console.log('Banco iniciado com sucesso')
}).catch(err => {
	console.log(err)
})


app.use('/users', userRoutes)

app.listen(3000, ()=> {
    console.log('Servidor rodando na porta 3000')
})