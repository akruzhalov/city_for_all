import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import PanelLayout from "./containers/CMR/HOC/PanelLayout";
import AppLayout from "./containers/SPA/HOC/AppLayout";
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLayout from "./containers/CMR/HOC/UserLayout";
import AdminLayout from "./containers/CMR/HOC/AdminLayout";

class App extends Component {
  render() {
    return (
        <div className={'App'}>
            <Switch>
                <Route path={'/admin'}>
                    <AdminLayout />
                </Route>
                <Route path={'/user'}>
                    <UserLayout />
                </Route>
                <Route path={'/panel'}>
                    <PanelLayout />
                </Route>
                <Route path={'/'}>
                    <AppLayout />
                </Route>
            </Switch>
        </div>
    );
  }
}

export default App;
