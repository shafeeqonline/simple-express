'use strict'
import express from 'express'
import * as Utils from './Utils'

let app = express()

app.get('/', (req, res) => {
  let text = Utils.message()
  res.send(text)
})

let server = app.listen(3000, () => {
  console.log(`server running at port http://localhost/${server.address().port}`)
})
