import React from 'react';
import Page from "./pages/scoreboard/Page";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
      <React.Fragment>
        <header>
          <div className="jumbotron">
            <h1 className="display-4">Basketball Scoreboard</h1>
            <p className="lead">This is a simple app using ReactJS</p>
          </div>
        </header>
        <div className="container-fluid">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Page}></Route>
            </Switch>
          </BrowserRouter>
        </div>
      </React.Fragment>
  );
}

export default App;
