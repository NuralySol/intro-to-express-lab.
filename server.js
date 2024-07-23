// Task: Create a route that responds to URLs like /greetings/<username-parameter>.
// Examples: Matches routes like /greetings/Christy or /greetings/Mathilda.
// Response: Include the username from the URL in the response, such as “Hello there, Christy!” or
// “What a delight it is to see you once more, Mathilda.”

// import module from express
import express from 'express'

// declare constants
const PORT = 3000

// instance of express
const app = express()

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello there ${name}!`);
})

// start the server it is working now for name now 
app.listen (PORT, ()=> {
    console.log(`Server is running on localhost:${PORT}`)
})

// Rolling the Dice
// Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.
// Examples: Matches routes like /roll/6 or /roll/20.
// Validation: If the parameter is not a number, respond with 
// “You must specify a number.” For instance, /roll/potato should trigger this response.
// Functionality: If a valid number is provided, respond with a random whole number 
// between 0 and the given number. For example, a request to 
// /roll/16 might respond with “You rolled a 14.”

