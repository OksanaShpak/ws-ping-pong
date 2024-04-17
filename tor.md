# WebSocket Ping-Pong Application

Create a simple WebSocket server and client that enables real-time communication using the WebSocket protocol. The server should handle incoming WebSocket connections, responding to 'ping' messages with 'pong' messages. The client, through a web page, should be able to connect to the WebSocket server and display messages received from the server.

## 1. WebSocket Server
- Set up an HTTP server to listen on port `3000`.
- Upgrade HTTP connections to WebSocket connections.
- Establish a WebSocket server that does not handle HTTP requests directly.
- Handle WebSocket connections and bind a message event listener to each connection.
- Implement a ping-pong message handling function that sends a 'pong' message back after a 1-second delay upon receiving a 'ping'.

## 2. Client-Side JavaScript
- Implement a function to establish a WebSocket connection to the server at `ws://localhost:3000/`.
- Bind an event listener to handle 'message' events by logging the message data to the console.
- Define a function to process incoming messages and log them to the console.

## 3. Web Page
- Create a basic HTML5 document structure.
- Link to an external JavaScript file that handles WebSocket connections.