import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";

class CurrentUser extends Component {
    state = {
        orders: []
    };

    componentDidMount() {
        const orders = Object.entries(this.props.location.state.orders).map((order) => {
            return {
                orderId: order[0],
                orderData: order[1]
            }
        });
        this.setState({orders})
    }

    render() {
        const user = this.props.location.state;
        const dateFormat = require('dateformat');
        return (
            <div className={'CurrentUser'}>
                <div className="card">
                    <div className="card-header">
                        <div className="header-info">
                            <h3>{`${user.secondName} ${user.firstName} ${user.lastName}`}</h3>
                            <p>{this.props.match.params.id}</p>
                        </div>
                        <NavLink to={'/admin/dashboard'}>
                            <Button variant={'primary'}>Назад</Button>
                        </NavLink>
                    </div>
                    <div className="card-body container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Контактная информация</h3>
                                <p><span>Телефон: </span>{user.phone}</p>
                                <p><span>Дата рождения: </span>{user.bornDate}</p>
                                <p><span>Пол: </span>{user.sex}</p>
                                <p><span>Льготная категория: </span>{user.privilege}</p>
                                <p><span>Адрес фактического проживания: </span>{user.factAdress}</p>
                            </div>
                            <div className="col-lg-6">
                                <h3>Паспортные данные</h3>
                                <p><span>Серия: </span>{user.passportSerie}</p>
                                <p><span>Номер: </span>{user.passportNumber}</p>
                                <p><span>Дата выдачи: </span>{user.passportDate}</p>
                                <p><span>Выдан: </span>{user.passportLocation}</p>
                                <p><span>Адрес регистрации: </span>{user.regAdress}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-12 orders">
                                <h3>Заказы пользователя</h3>
                                {this.state.orders.map((order, index) => {
                                    return (
                                        <div className={'card'} key={index+order}>
                                            <div className="card-body">
                                                <div className="order-info">
                                                    <h5>{order.orderData.orderCategory}</h5>
                                                    <p><span>Дата заказа:</span> {dateFormat(order.orderData.orderDate, "mmmm dS, dddd, h:MM")}</p>
                                                </div>
                                                <h5>{order.orderId}</h5>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CurrentUser);