import React from "react";
import "./App.css";
import { LambdaDemo } from "./components/LambdaDemo";
import { WitAI } from "./components/WitAI";

const App = () => (
  <div className="App">
    <header className="App-header">HOMER</header>
    <main>
      <div>
        <LambdaDemo />
        <WitAI />
      </div>
    </main>
    <footer></footer>
  </div>
);

export default App;
