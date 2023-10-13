const express = require( "express")
const connectTomongo = require( "./db")
connectTomongo();

const app = express()
const port = 5000

app.use(express.json())


app.use('/api/ownerauth',require('./routes/OwnerAuth'))
app.use('/api/userauth', require('./routes/UserAuth'))

  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


 

