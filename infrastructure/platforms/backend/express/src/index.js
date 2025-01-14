"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Create an Express application
const app = (0, express_1.default)();
// Set the port number for the server
const port = 3000;
// Define a route for the root path ('/')
app.get('/', (req, res) => {
    // Send a response to the client
    res.send('Hello, TypeScript + Node.js + Express!');
});
// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});
