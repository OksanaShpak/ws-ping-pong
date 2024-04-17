# Instructions for WebSocket Ping-Pong Application

Hi there! To get the WebSocket Ping-Pong Application up and running, please follow the steps below:

1. Install the WebSocket (`ws`) Node.js library by running the following command in your terminal:
`npm i ws`

2. Start your server from `index.js` by pressing `fn` + `F5` (on Mac) or `F5` (on Windows).

3. Open your browser and navigate to `http://localhost:3000`.

4. Access your browser's console. In most browsers, you can do this by right-clicking the page, selecting `Inspect`, and clicking on the `Console` tab.

5. In the console, type `ws.send('ping')` and press `Enter`.

6. You should see a `'pong'` message appear in the console after 1 second.

If you encounter any issues, ensure that your server is running correctly and that there are no errors in the browser's console.