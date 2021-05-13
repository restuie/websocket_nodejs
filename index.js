const WebSocket = require('ws');
var socket = new WebSocket('ws://localhost:3000');

//開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行

socket.onopen = () => {
    console.log('open connection')
}



socket.onclose = () => {
    console.log('close connection')
}

//接收 Server 發送的訊息
socket.onmessage = event => {
    console.log(event)
}