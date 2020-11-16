import {Switch, Route} from "react-router-dom";
import App from "./App";
import SignIn from "./components/signin/SignIn";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/signin" component={SignIn} />
        </Switch>
    );
};

export default Routes;