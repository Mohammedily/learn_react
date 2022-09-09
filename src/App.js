import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Screen from './component/Screen';
import Profile from './component/Profile';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Screen exact path="/profile" component={Profile} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
