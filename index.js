const express = require('express')
const chalk = require('chalk')
const fs = require('fs')
const cors = require('cors')
const path = require('path')

const app = express() 

app.enable("trust proxy")
app.set("json spaces", 2)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Webs
app.get('/', (req, res) => {
res.redirect('/home')})
app.get('/favicon.ico', (req, res) => {
res.redirect('https://github.com/DevZyxlJs.png')})
app.use('/home', express.static(path.join(__dirname, 'src', 'index.html')))
app.use('/test', express.static(path.join(__dirname, 'src', 'commands.js')))

module.exports = app