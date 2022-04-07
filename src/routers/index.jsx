import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "../pages/login";
import PrivateRoute from "./privateRoute";
import Home from "../pages/home";
const Routers = () => {
//   const accessToken = useSelector((state) => state.token.token);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <LoginPage />
        </Route>
        <PrivateRoute path="/create-playlist" component={Home}>
        </PrivateRoute>
      </Switch>
    </Router>
  );
};
export default Routers;
