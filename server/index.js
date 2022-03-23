const server = require("./server.js")
const port = 3000;

server.listen(port, () => console.log(`Express departing now from http://localhost:${port}`));
