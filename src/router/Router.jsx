import { Route, Switch } from 'react-router-dom';
import Logout from '../pages/Logout';

/**
 * @description Router
 */

function Router() {
    return (
        <Switch>
            <Route path="/logout" component={Logout} />
        </Switch>
    );
}

export default Router;
