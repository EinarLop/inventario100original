import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import CreateWatch from "./components/create-watch.component"
import Menu from "./components/menu.component"
import WatchList from './components/watch-list.component';
import EditWatch from './components/edit-watch.component'



function App() {
  return (
    <Router>
      <div>

        <Menu />
        <br />
        <div>
          <Route path="/add" component={CreateWatch} />
          <Route path="/list" component={WatchList} />
          <Route path="/edit/:id" component={EditWatch} />

        </div>

      </div>
    </Router >


  );
}

export default App;
