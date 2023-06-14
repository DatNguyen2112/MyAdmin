import './App.css'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './component/Home/Home';
import Users from './component/Users/Users';
import Products from './component/Products/Products';
import Costumer from './component/CostumerInfo/Costumer';
import Analytics from './component/Analytics/Analytics';
import Orders from './component/Orders/Orders';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={() => <Home />}/>
          <Route exact path='/Users' component={() => <Users />}/>
          <Route exact path='/Products' component={() => <Products />}/>
          <Route exact path='/CustomerInfo' component={() => <Costumer />}/>
          <Route exact path='/Orders' component={() => <Orders />}/>
          <Route exact path='/AnalyticsChart' component={() => <Analytics />}/>
        </Switch>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
