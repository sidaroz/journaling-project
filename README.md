# Factopia

An anonymous fact posting site where anyone can post a fact with a title and description, as well as reply with comments and gifs and react via emojis to existing posts.

## Installation

### Local Hosting

- Clone or download the repo
- Open the terminal and navigate to folder
- Input `cd server` in terminal to navigate to folder with `package.json` file
- Run `npm init -y` to initialize dependencies
- Run `npm install` to install dependencies

### Remote Hosting

- API is hosted on heroku in {add link}
- Website is deployed on netlify {add link}

### Usage

- Run `npm run dev` to start with nodemon or `npm start` to run with node
- To run client tests, cd into client folder and input `npm test` into terminal. For server tests, cd into server folder and input `npm test` into terminal. For respective coverage reports, input `npm run coverage` in the terminal

## Technologies

### Front End:

- HTML/CSS
- JavaScript
- Giphy API

### Backend:

- Node.js
- Express.js
- Cors
- Nodemon

## Wins and Challenges

### Wins

- Inserting Giphy API into client and being able to respond with gifs as comments.
- Being able to push new data into the API and fetch data back to the client when webpage is refreshed.

### Challenges

- Had difficulty in the beginning with linking our api to our client website.
- There was a bug where adding and removing a reaction would update the counter on the webpage, but the api would not register removing the reaction
