import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import Main from "../pages/Main";
import Volunteers from "../pages/Volunteers";
import Shops from "../pages/Shops";
import Pharmacies from "../pages/Pharmacies";
import Taxi from "../pages/Taxi";
import Humane from "../pages/Humane";
import Cleaning from "../pages/Cleaning";
import Services from "../pages/Services";
import Contacts from "../pages/Contacts";
import {Form, Nav, Navbar} from "react-bootstrap";

class AppLayout extends Component {
    render() {
        return (
            <div className={'AppLayout'}>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="http://кцсон-муравленко.янао.рф/index.php?option=com_content&view=featured&Itemid=479" style={{marginRight: '40px'}}>Logo CFA</Navbar.Brand>
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
                        <i className="fa fa-2x fa-eye"/>
                        {localStorage.userName !== undefined ?
                            <Form inline>
                                <NavLink to={'/user'} className={'nav-link'}>{localStorage.userName}</NavLink>
                            </Form> :
                            <Form inline>
                                <NavLink to={'/panel/login'} className={'nav-link'}>Вход</NavLink>
                            </Form>
                        }
                    </Navbar.Collapse>
                </Navbar>
                <div className="app-content">
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
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AppLayout;