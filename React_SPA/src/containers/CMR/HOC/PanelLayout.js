import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "../pages/forms/Login";
import Registration from "../pages/forms/Registration";

class PanelLayout extends Component {
    render() {
        return (
            <div className={'PanelLayout'}>
                <Switch>
                    <Route path={'/panel/login'}>
                        <Login />
                    </Route>
                    <Route path={'/panel/registration'}>
                        <Registration />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default PanelLayout;