// Task 1.
// Create a route that responds to URLs like /greetings/<username-parameter>.
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

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`)
})

// Task 2.
// Rolling the Dice
// Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.
// Examples: Matches routes like /roll/6 or /roll/20.
// Validation: If the parameter is not a number, respond with 
// “You must specify a number.” For instance, /roll/potato should trigger this response.
// Functionality: If a valid number is provided, respond with a random whole number 
// between 0 and the given number. For example, a request to 
// /roll/16 might respond with “You rolled a 14.
// Route to handle dynamic rolling of dice

app.get('/roll/:number', (req, res) => {
    const { number } = req.params;

    // Check if the parameter is a valid number
    const maxRoll = parseInt(number);
    if (isNaN(maxRoll)) {
        res.send('You must specify a number.');
    } else {
        // Generate a random number and make it an integeger because math.random is not
        const result = Math.floor(Math.random() * maxRoll) + 1;
        res.send(`You rolled a ${result}.`);
    }
});

// Task 3. 
// I Want THAT One!
// Task: Create a route for URLs like /collectibles/<index-parameter>.
// Examples: Matches routes such as /collectibles/2 or /collectibles/0.
// Data Array:

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) => {
    const { index } = req.params;
    const idx = parseInt(index);

    if (isNaN(idx) || idx < 0 || idx >= collectibles.length) {
        res.status(404).send('Item cannot be found..');
    } else {
        const item = collectibles[idx];
        res.send(`item:${item.name}, price: $${item.price}`);
    }
});


// Task 4: 
// Create a route /shoes that filters 
// the list of shoes based on query parameters.

// Query Parameters:
// min-price: Excludes shoes below this price.
// max-price: Excludes shoes above this price.
// type: Shows only shoes of the specified type.
// No parameters: Responds with the full list of shoes.

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    let filteredShoes = shoes;
    
    // Filter by min price
    if (req.query['min-price']) {
        const minPrice = parseFloat(req.query['min-price']);
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= minPrice);
    }

    // Filter by maximum price
    if (req.query['max-price']) {
        const maxPrice = parseFloat(req.query['max-price']);
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
    }

    // Filter by type
    if (req.query.type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === req.query.type);
    }

    res.json(filteredShoes);
});
