import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import HtmlDefinition from "./components/HtmlDefinition";
import JsDefinition from "./components/JsDefinition";
import CssDefinition from "./components/CssDefinition";

import Navbar from "./components/Navbar";

export default () => (
  <>
    <Navbar />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/html" component={HtmlDefinition} />
        <Route path="/js" component={JsDefinition} />
        <Route path="/css" component={CssDefinition} />
      </Switch>
    </div>
  </>
);
