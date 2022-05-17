//how to import express
const express = require('express');
// express is a function 
// create our express app
const app = express();

let games = [];
{
    name: 'minecraft',
    funLevel; 7
}
{
    name: 'CoD',
    funLevel; 8.7
}


//share clinet side profile with the public
app.use(express.static('server/public'));
// request + response
app.get('/games', (req, res) => {
    //this code is run when someone asks to get our games
    // this sends games back to the client
    res.send(games);
});

// listen for the internet requests
app.listen(5000, () => {
console.log(`😶‍🌫️ listening`);

});

console.log('in a server no wayyyy');