import Cart from "./components/cart";
import Navbar from "./components/navbar";
import Preview from './components/preview';
import Home from './components/home'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path ='/cart'>
          <Cart/>
        </Route>
        <Route path ='/preview/:id'>
          <Preview/>
        </Route>
        <Route path ='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
