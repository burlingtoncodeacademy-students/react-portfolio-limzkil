//Init express
const express = require('express')

const app = express()
//setting up default port
const port = process.env.PORT || 5000
//Binding our server to a static directory
app.use(express.static("./client/build"))

//Seting up a route handler
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html")
})
//Open a connection to listen for/respond to requests
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})