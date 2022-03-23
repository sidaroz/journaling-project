# journaling-project# Factopia

An anonymous fact posting site where anyone can post a fact with a title and description, as well as reply with comments and gifs and react via emojis to existing posts

## Installation

### Local Hosting

- Clone or download the repo
- Open the terminal and navigate to folder
- Input `cd server` in terminal to navigate to folder with `package.json` file
- Run `npm init -y` to initialize dependencies
- Run `npm install` to install dependencies

### Remote Hosting

- API is hosted on heroku in {add link}
- Website is deployed on netlity {add link}

### Usage

- Run `npm run dev` to start with nodemon or `npm start` to run with node
- Run tests with `npm test` and run coverage with `npm run coverage`

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
  -Being able to push comments into the API from frontend to then pull them back when the webpage is refreshed.

### Challenges

- Had difficulty in the beginning with linking our api to our client website
- Our emoji counter was only linked to one particular emoji and we didn't know how to
