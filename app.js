import express from 'express'

const app = express()

app.use((req, res, next) => {
  console.log('hello world')
  res.send('<h1>Hello world!</h1>')
  next()
}) 

app.listen(3000)

