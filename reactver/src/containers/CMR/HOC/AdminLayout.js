import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import AdminEnter from "../pages/admin/AdminEnter";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CurrentUser from "../pages/admin/userOption/CurrentUser";
class AdminLayout extends Component {
    render() {
        return (
            <div className={'AdminLayout'}>
                <Switch>
                    <Route path={'/admin'} exact>
                        <AdminEnter />
                    </Route>
                    <Route path={'/admin/dashboard'} exact>
                        <AdminDashboard />
                    </Route>
                    <Route path={'/admin/dashboard/:id'}>
                        <CurrentUser />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default AdminLayout;