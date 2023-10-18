import "./styles.css";

import WebSocket from "tauri-plugin-websocket-api";
import App from "./App.svelte";

async function _updateResponse(returnValue) {
  console.log(
    "not understood",
    "returnValue",
    returnValue,
    "type",
    returnValue.type
  );
  // {
  // last_ping.set(Date.now());
  // console.log("last_ping", $last_ping);

  // }

  // response += (typeof returnValue === 'string' ? returnValue : JSON.stringify(returnValue)) + '<br>'
}

const ws = WebSocket.connect("ws://104.248.166.204:5670")
  .then((r) => {
    console.log("connected to socket... ");
    _updateResponse("Connected");

    r?.addListener(_updateResponse);
    r?.send("Hello World");
    return r;
  })
  .catch(_updateResponse);
const app = new App({
  target: document.getElementById("app"),
});

export default app;
