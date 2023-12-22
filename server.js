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



// const express = require('express')
// const app = express()

// app.get('/tip/:total/:tipPercentage', (req, res) => {
//     const total = parseFloat(req.params.total)
//     const tipPercentage = parseFloat(req.params.tipPercentage)

//     const tip = (total * tipPercentage) / 100
//     res.send( `Your tip will be: $${tip.toFixed(2)}`)

// })

// app.listen(3000, () => {
//     console.log('Tip 3000 is ACTIVE')
// })


const express = require('express')
const app = express()

const magicBallResponse = [
    'It is certain',
 'It is decidedly so',
 'Without a doubt',
 'Yes, definitely',
 'You may rely on it',
 'As I see it, yes',
 'Most likely',
 'Outlook good',
 'Yes',
 'Signs point to yes',
 'Ask again later',
 'Better not tell you now'
]

app.get('/magic/:question', (req, res) => {
    const question = decodeURIComponent(req.params.question);
    const randomIndex = Math.floor(Math.random() * magicBallResponse.length);
    const magic8BallResponse = magicBallResponse[randomIndex];

    res.send(`<h1>${question}</h1><h1>${magicBallResponse}</h1>`);
});

app.listen(3000, () => {
    console.log('MAGIC8BALL is running on port 3000');
});





