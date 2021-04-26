import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import GlobalStyle from './globalStyles';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
