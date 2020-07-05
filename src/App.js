import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Tech from "./pages/techScrape";
import Sports from "./pages/sportScrape";
import Science from "./pages/scienceScrape";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Tech} />
          <Route exact path="/sports" component={Sports} />
          <Route exact path="/science" component={Science} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
