import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class AdminEnter extends Component {
    render() {
        return (
            <div className={'AdminEnter'}>
                <div className="AdminEnter__header">
                    <h3>Привет, Админ</h3>
                    <p>Войдите в систему администрирования, пожалуйста</p>
                </div>
                <div className="AdminEnter__content">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Введите email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder="Пароль" />
                        </Form.Group>
                        <NavLink to={'/admin/dashboard'}>
                            <Button variant="primary" type="submit">Войти в систему</Button>
                        </NavLink>
                    </Form>
                </div>
            </div>
        );
    }
}

export default AdminEnter;