import fetch from 'node-fetch'
// const fetch = require("node-fetch")
console.log(`It works!`);

const fetcher = async () => {
    const response = await fetch('https://api.github.com/users/github')
    const data = await response.json()
    
    console.log(data);

}

fetcher()