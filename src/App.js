import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index'
import signinPage from './pages/signin';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={signinPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
