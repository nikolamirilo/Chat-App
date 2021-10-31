import React from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import { LoginForm, Navbar } from "./components";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div className="App">
      <Navbar />
      <ChatEngine
        height="90vh"
        projectID="48417ad5-edcb-4b67-be4e-1cfda38b8cfc"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};
export default App;
