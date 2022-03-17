import { BrowserRouter } from "react-router-dom";
import { connect } from "socket.io-client";
import Router from "./router/Router";
import "./style/dist/output.css";
import { AuthProvider } from "./context/authContext";
import { MessageProvider } from "./context/messageContext";

function App() {
  const socket = connect("ws://sweeft-chat-app.herokuapp.com");

  const emitSocket = () => {
    socket.emit("message", "data");
  };

  return (
    <>
      <button onClick={() => emitSocket()}>request</button>
      <BrowserRouter>
        <AuthProvider>
          <MessageProvider>
            <Router />
          </MessageProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
