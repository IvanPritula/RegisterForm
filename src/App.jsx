import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends React.Component {
  render(){
  return (
    <main>
      <Login/>
      <Register/>
    </main>
  );
  };
}

export default App;
