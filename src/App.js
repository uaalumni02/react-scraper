import React from "react";
// import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import UserContextProvider from "./contexts/UserContext";

import Tech from "./pages/techScrape";


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        {/* <UserContextProvider> */}
        <Switch>
          <Route exact path="/" component={Tech} />
        </Switch>
        {/* </UserContextProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
