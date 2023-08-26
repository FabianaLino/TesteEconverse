import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../pages";

export const Routes = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/pagina-inicial"  Component={Home}/>

            <Route path="*" Component={() => <Redirect to="/pagina-inicial" />} />
        </Switch>
    </BrowserRouter>;
    )
};
