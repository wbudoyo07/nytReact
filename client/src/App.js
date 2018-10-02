import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";



const App = () => (
<Router>
    <div>
        <Jumbotron />
        <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/saved" component = {Saved} />
            <Route component = {NoMatch} />
        </Switch>
    </div>
</Router>
);

export default App;