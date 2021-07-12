import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Review from "./pages/Review";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={localStorage.getItem("user") ? "/home" : "/login"} />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/review/:productId">
          <Review />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}
