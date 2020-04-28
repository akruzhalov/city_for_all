import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Form, Nav, Navbar} from "react-bootstrap";
import {Route, Switch} from 'react-router-dom';
import Main from "./Main";
import Volunteers from "./Volunteers";
import Shops from "./Shops";
import Pharmacies from "./Pharmacies";
import Taxi from "./Taxi";
import Humane from "./Humane";
import Cleaning from "./Cleaning";
import Services from "./Services";
import Contacts from "./Contacts";
import NannyQuery from "./queries/NannyQuery";
import TaxiQuery from "./queries/TaxiQuery";
import Registration from "./forms/Registration";
import Login from "./forms/Login";

class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home" style={{marginRight: '40px'}}>Logo CFA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink to={'/'} exact className={'nav-link'}>Главная</NavLink>
                            <NavLink to={'/volunteers'} className={'nav-link'}>Волонтеры</NavLink>
                            <NavLink to={'/shops'} className={'nav-link'}>Магазины</NavLink>
                            <NavLink to={'/pharmacies'} className={'nav-link'}>Аптеки</NavLink>
                            <NavLink to={'/taxi'} className={'nav-link'}>Такси</NavLink>
                            <NavLink to={'/humane'} className={'nav-link'}>Гуманитар</NavLink>
                            <NavLink to={'/cleaning'} className={'nav-link'}>Уборка</NavLink>
                            <NavLink to={'/services'} className={'nav-link'}>Обслуживание</NavLink>
                            <NavLink to={'/contacts'} className={'nav-link'}>Контакты</NavLink>
                        </Nav>
                        {/*<Form inline>*/}
                        {/*    <NavLink to={'/login'} className={'nav-link'}>Вход</NavLink>*/}
                        {/*    <NavLink to={'/registration'} className={'nav-link'}>Регистрация</NavLink>*/}
                        {/*</Form>*/}
                    </Navbar.Collapse>
                </Navbar>
                <div className="content">
                    <Switch>
                        <Route path={'/'} exact>
                            <Main />
                        </Route>
                        <Route path={'/volunteers'}>
                            <Volunteers />
                        </Route>
                        <Route path={'/shops'}>
                            <Shops />
                        </Route>
                        <Route path={'/pharmacies'}>
                            <Pharmacies />
                        </Route>
                        <Route path={'/taxi'}>
                            <Taxi />
                        </Route>
                        <Route path={'/humane'}>
                            <Humane />
                        </Route>
                        <Route path={'/cleaning'}>
                            <Cleaning />
                        </Route>
                        <Route path={'/services'}>
                            <Services />
                        </Route>
                        <Route path={'/contacts'}>
                            <Contacts />
                        </Route>
                        <Route path={'/nannyquery'}>
                            <NannyQuery />
                        </Route>
                        <Route path={'/taxiquery'}>
                            <TaxiQuery />
                        </Route>
                        {/*<Route path={'/login'}>*/}
                        {/*    <Login />*/}
                        {/*</Route>*/}
                        {/*<Route path={'/registration'}>*/}
                        {/*    <Registration />*/}
                        {/*</Route>*/}
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Layout;