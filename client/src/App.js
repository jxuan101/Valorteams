import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/pages'
import Breeze from './components/pages/breeze';
import Icebox from './components/pages/icebox';
import Bind from './components/pages/bind';
import Haven from './components/pages/haven';
import Split from './components/pages/split';
import Ascent from './components/pages/ascent';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/breeze" component = {Breeze} />
        <Route path = "/icebox" component = {Icebox} />
        <Route path = "/bind" component = {Bind} />
        <Route path = "/haven" component = {Haven} />
        <Route path = "/split" component = {Split} />
        <Route path = "/ascent" component = {Ascent} />
      </Switch>
    </Router>
  );
}
