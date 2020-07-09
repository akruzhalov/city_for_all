import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import UserDashboard from "../pages/user/UserDashboard";
import UserChange from "../pages/user/UserChange";
import UserOrder from "../pages/user/UserOrder";

class UserLayout extends Component {
    render() {
        return (
            <div className={'UserLayout container-fluid'}>
                <div className="row">
                    <div className="col-lg-2">
                        <div className="UserLayout__navigation">
                            <NavLink to={'/'}><h1>ГДВ</h1></NavLink>
                            <div className="UserLayout__navigation_links">
                                <NavLink to={'/'} exact className={'nav-link'}>Главная</NavLink>
                                <NavLink to={'/volunteers'} className={'nav-link'}>Волонтеры</NavLink>
                                <NavLink to={'/shops'} className={'nav-link'}>Магазины</NavLink>
                                <NavLink to={'/pharmacies'} className={'nav-link'}>Аптеки</NavLink>
                                <NavLink to={'/taxi'} className={'nav-link'}>Такси</NavLink>
                                <NavLink to={'/humane'} className={'nav-link'}>Гуманитар</NavLink>
                                <NavLink to={'/cleaning'} className={'nav-link'}>Уборка</NavLink>
                                <NavLink to={'/services'} className={'nav-link'}>Обслуживание</NavLink>
                                <NavLink to={'/contacts'} className={'nav-link'}>Контакты</NavLink>
                            </div>
                            <div className="UserLayout__navigation_supportLinks">
                                <NavLink to={'/user'} className={'nav-link'}>Профиль</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="UserLayout__content">
                            <Switch>
                                <Route path={'/user/change'}>
                                    <UserChange />
                                </Route>
                                <Route path={'/user'} exact>
                                    <UserDashboard />
                                </Route>
                                <Route path={'/user/new_order'}>
                                    <UserOrder />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserLayout;