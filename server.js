// const express = require('express')
// const app = express()
// const PORT = process.env.PORT || 3000

// app.get('/greeting/:name', (req, res) => {
//     const name = req.params.name
//     const greetings = [
//         `Hello, ${Arthur}` 
//     ]

// })
// app.listen(3000, () => {
//     console.log('3000 is ACTIVE')
// })



const express = require('express')
const app = express()

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseFloat(req.params.total)
    const tipPercentage = parseFloat(req.params.tipPercentage)

    const tip = (total * tipPercentage) / 100
    res.send( `Your tip will be: $${tip.toFixed(2)}`)

})

app.listen(3000, () => {
    console.log('Tip 3000 is ACTIVE')
})



