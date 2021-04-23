import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar.component';
import PokesetList from './components/pokesetlist.component';
import CreatePokeset from './components/createpokeset.component';
import CreateUser from './components/createuser.component';
import EditPokeset from './components/editpokeset.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path='/' exact component={PokesetList}/>
        <Route path='/create' component={CreatePokeset}/>
        <Route path='/login' component={CreateUser}/>
        <Route path="/edit/:id" component={EditPokeset}/>
      </div>
    </Router>
  );
}

export default App;
