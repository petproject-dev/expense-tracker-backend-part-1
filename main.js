import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hel lo Wor_ld!')
})

app.listen(3000, () => {
  console.log('App listening on port 3000')
})
