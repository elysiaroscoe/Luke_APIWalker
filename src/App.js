import React, {useState} from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Form from './Components/Form';
import People from './Views/People';
import Planets from './Views/Planets';
import Starships from './Views/Starships';
function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <div className="container m-5">
        <Form/>

        <Switch>
          <Route path="/people/:id">
            {/* id will be imported through useParams */}
            <People/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/planets/:id">
            <Planets/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/starships/:id">
            <Starships/>
          </Route>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
