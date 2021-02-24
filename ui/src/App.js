import './App.css';
import React from "react";
import Register from "./component/register";
import MyContextProvider from "./contexts/contexts";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Route path='/register' component={Register} />
          <Route path='/context' component={MyContextProvider} />

      </div>
    </BrowserRouter>
  );
}

export default App;
