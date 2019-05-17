import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Beranda";
import About from "./container/About/about";
import Contact from "./container/Contact";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    );
  }
}
export default App;
