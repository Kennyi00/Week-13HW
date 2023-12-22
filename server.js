const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    const greetings = [
        `Hello, ${Arthur}` 
    ]

})
app.listen(3000, () => {
    console.log('3000 is ACTIVE')
})