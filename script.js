const ws = new WebSocket('ws://localhost:3000/');

ws.addEventListener('message', handleMessage);

function handleMessage(e) {
  console.log(e.data)
}