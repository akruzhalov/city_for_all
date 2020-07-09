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
                    <Navbar.Brand className={'py-3'} href="/" style={{marginRight: '40px', minWidth: '100px'}}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA8CAYAAAC0ClJLAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAbJaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTItMjJUMTU6MTg6NDIrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDYtMTVUMTY6MTA6MzcrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA2LTE1VDE2OjEwOjM3KzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNmZTRhNjk3LWE4YTUtYTg0MC05OTcwLTFkYzk0MGFmOTRlZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0YzljZjJjLTY3ODQtYzU0Yy1hY2ExLTczNTAyNTdmMWE0NCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQ2NzYxYzFhLWJhN2QtODI0Yy1hNjZmLTc3MGJmZWU5N2U4OSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJBZG9iZSBSR0IgKDE5OTgpIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Njc2MWMxYS1iYTdkLTgyNGMtYTY2Zi03NzBiZmVlOTdlODkiIHN0RXZ0OndoZW49IjIwMTktMTItMjJUMTU6MTg6NDIrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2VjNWM4MWEtMzQ5Yy0yZjQzLTk0ZjQtZDFmNmFhZmZjYTczIiBzdEV2dDp3aGVuPSIyMDE5LTEyLTIyVDE1OjE4OjQyKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93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" class="img-fluid"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink to={'/volunteers'} className={'nav-link'}>Волонтеры</NavLink>
                            <NavLink to={'/shops'} className={'nav-link'}>Магазины</NavLink>
                            <NavLink to={'/pharmacies'} className={'nav-link'}>Аптеки</NavLink>
                            <NavLink to={'/taxi'} className={'nav-link'}>Такси</NavLink>
                            <NavLink to={'/humane'} className={'nav-link'}>Гуманитар</NavLink>
                            <NavLink to={'/cleaning'} className={'nav-link'}>Уборка</NavLink>
                            <NavLink to={'/services'} className={'nav-link'}>Обслуживание</NavLink>
                            <NavLink to={'/contacts'} className={'nav-link'}>Контакты</NavLink>
                        </Nav>
                        {/* Not implemented */}
                        {/* <i className="fa fa-2x fa-eye"/> */}
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