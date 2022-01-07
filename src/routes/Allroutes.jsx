import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import PrivateRoute from "../routes/Privateroutes";

export default function Allroutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>

      <PrivateRoute exact path="/dashboard">
        <Dashboard />
      </PrivateRoute>
 
      <Route exact path="/settings">
        <Settings />
      </Route>
    </Switch>
  );
}
