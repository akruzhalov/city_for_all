import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import {NavLink, withRouter} from "react-router-dom";
import {logout, renderData} from "../../../../store/actions/userAuthActions";
class UserDashboard extends Component {

    componentDidMount() {
        this.props.renderData()
    };

    logoutHandler = () => {
      this.props.logout();
      this.props.history.push('/panel/login')
    };

    render() {
        const dateFormat = require('dateformat');
        return (
            <div className={'UserDashboard'}>
                <div className="UserDashboard__header">
                    <div className="UserDashboard__header_info">
                        <h1>{`${this.props.userData.secondName} ${this.props.userData.firstName} ${this.props.userData.lastName}`}</h1>
                        <p>{this.props.userData.email}</p>
                        <p>{this.props.userData.phone}</p>
                    </div>
                    <div className="UserDashboard__header_buttons">
                        <NavLink to={'/user/change'}>
                            <Button variant={'primary'}>Редактировать профиль</Button>
                        </NavLink>
                        {this.props.userData.passportSerie === undefined ?
                            null :
                            <NavLink to={'/user/new_order'}>
                                <Button variant={'primary'}>Сделать новый заказ</Button>
                            </NavLink>
                        }
                        <Button variant={'secondary'} onClick={this.logoutHandler}>Выйти</Button>
                    </div>
                    <small>Обратите внимание, что заказать услугу можно только после того, как вы заполнили ВЕСЬ профиль</small>
                </div>
                <div className="UserDashboard__content container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={'UserDashboard__content_info'}>
                                {this.props.userData.passportSerie === undefined ?
                                    <p style={{marginBottom: 0}}>Данные не заполнены, отредактируйте профиль, пожалуйста</p> :
                                    <div className={'data'}>
                                        <div className="contact-info">
                                            <h3>Контактная информация</h3>
                                            <p><span>Телефон:</span> {this.props.userData.phone}</p>
                                            <p><span>Дата рождения:</span> {this.props.userData.bornDate}</p>
                                            <p><span>Пол:</span> {this.props.userData.sex}</p>
                                            <p><span>Льготная категория:</span> {this.props.userData.privilege}</p>
                                            <p><span>Адрес фактического проживания:</span> {this.props.userData.factAdress}</p>
                                        </div>
                                        <hr/>
                                        <div className="passport-data">
                                            <h3>Паспортные данные</h3>
                                            <p><span>Серия:</span> {this.props.userData.passportSerie}</p>
                                            <p><span>Номер:</span> {this.props.userData.passportNumber}</p>
                                            <p><span>Дата выдачи:</span> {this.props.userData.passportDate}</p>
                                            <p><span>Выдан:</span> {this.props.userData.passportLocation}</p>
                                            <p><span>Адрес регистрации:</span> {this.props.userData.regAdress}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={'UserDashboard__content_orders'}>
                                <div className="orders-header">
                                    <h3>Заказы</h3>
                                </div>
                                {this.props.orders.map((order, index) => {
                                    return (
                                        <div className={'order'} key={order+index}>
                                            <h5>{order.orderData.orderCategory}</h5>
                                            <p><span>Дата заказа:</span> {dateFormat(order.orderData.orderDate, "mmmm dS, dddd, h:MM")}</p>
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

function mapStateToProps(state) {
    return {
        userId: state.userAuthReducer.userId,
        userData: state.userAuthReducer.userData,
        orders: state.userAuthReducer.orders
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout()),
        renderData: () => dispatch(renderData())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDashboard));