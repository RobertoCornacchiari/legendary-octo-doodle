import React from "react";
import "./App.css";
import InnerComponents from "./components/InnerComponents";

/*
  POST/ https://dev.api.crono.one/Auth/Login
  These are the credentials for an account in Crono that has not payed yet
  {
    email: test+1@crono.one
    password: B23HD^g(a,6zjh
  }
*/

function App() {
  return (
    <div className="App">
      <InnerComponents />
    </div>
  );
}

export default App;
