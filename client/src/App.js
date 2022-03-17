import { BrowserRouter } from "react-router-dom";
import { connect } from "socket.io-client";

import Router from "./router/Router";
import "./style/dist/output.css";

function App() {
  const socket = connect("ws://sweeft-chat-app.herokuapp.com");

  const emitSocket = () => {
    socket.emit("message", "data");
  };

  return (
    <>
      <button onClick={() => emitSocket()}>request</button>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
