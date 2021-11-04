
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {

  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Blog from './Pages/Blog/Blog';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import Myorder from './Pages/Myorder/Myorder';
import Navigation from './Pages/Home/Navigation/Navigation';
import Login from './Pages/Login/Login';

function App() {
  return (
  <Router>
    <Navigation></Navigation>
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/manageorder">
        <ManageOrder></ManageOrder>
      </Route>
      <Route path="/myorder">
        <Myorder></Myorder>
      </Route>
      <Route path="/login"> 
        <Login></Login>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
</Router>
    
  );
}

export default App;
