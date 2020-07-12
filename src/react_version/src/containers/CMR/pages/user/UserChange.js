import React, {Component} from 'react';
import {Button, Col, Form} from "react-bootstrap";
import {renderData} from "../../../../store/actions/userAuthActions";
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import axios from 'axios';

class UserChange extends Component {

    state = {
        phone: '',
        born: '',
        sex: '',
        factAdress: '',
        privilege: '',
        serie: '',
        number: '',
        passportDate: '',
        passportLocation: '',
        regAdress: ''
    };

    componentDidMount() {
        this.props.renderData()
    }

    setPhone = event => {
        this.setState({phone: event.target.value})
    };
    setBorn = event => {
        this.setState({born: event.target.value})
    };
    setSex = event => {
        this.setState({sex: event.target.value})
    };
    setFactAdress = event => {
        this.setState({factAdress: event.target.value})
    };
    setPrivilege = event => {
        this.setState({privilege: event.target.value})
    };
    setSerie = event => {
        this.setState({serie: event.target.value})
    };
    setNumber = event => {
        this.setState({number: event.target.value})
    };
    setPassportDate = event => {
        this.setState({passportDate: event.target.value})
    };
    setPassportLocation = event => {
        this.setState({passportLocation: event.target.value})
    };
    setRegAdress = event => {
        this.setState({regAdress: event.target.value})
    };

    changeDataHandler = async event => {
        event.preventDefault();
        try {
            await axios.put(`https://city-for-all-9f11c.firebaseio.com/users/${localStorage.userId}/${this.props.userId}.json`, {
                bornDate: this.state.born,
                email: this.props.userData.email,
                factAdress: this.state.factAdress,
                firstName: this.props.userData.firstName,
                secondName: this.props.userData.secondName,
                lastName: this.props.userData.lastName,
                orders: this.props.userData.orders,
                passportDate: this.state.passportDate,
                passportLocation: this.state.passportLocation,
                passportNumber: this.state.number,
                passportSerie: this.state.serie,
                phone: this.state.phone,
                privilege: this.state.privilege,
                regAdress: this.state.regAdress,
                sex: this.state.sex
            });
            this.props.history.push('/user')
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        // const validate =
        //     ((this.state.born === '')
        //     || (this.state.phone === '')
        //     || (this.state.sex === '')
        //     || (this.state.factAdress === '')
        //     || (this.state.privilege === '')
        //     || (this.state.serie === '')
        //     || (this.state.number === '')
        //     || (this.state.passportDate === '')
        //     || (this.state.passportLocation === '')
        //     || (this.state.regAdress === ''));
        return (
            <div className={'UserChange'}>
                <Form>
                    <div className="UserChange__contact">
                        <h3>Контактная информация</h3>
                        <Form.Row>
                            <Form.Group as={Col} controlId="telephone">
                                <Form.Label>Телефон</Form.Label>
                                <Form.Control type="tel" placeholder="Введите телефон" defaultValue={this.props.userData.phone} onChange={this.setPhone} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="bornDate">
                                <Form.Label>Дата рождения</Form.Label>
                                <Form.Control type="date" placeholder="Введите дату рождения" defaultValue={this.props.userData.bornDate} onChange={this.setBorn} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="Sex">
                                <Form.Label>Пол</Form.Label>
                                <Form.Control as="select" defaultValue={this.props.userData.sex} onChange={this.setSex}>
                                    <option>Мужской</option>
                                    <option>Женский</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="factAdress">
                                <Form.Label>Адрес фактического проживания</Form.Label>
                                <Form.Control type="text" placeholder="Введите адрес" defaultValue={this.props.userData.factAdress} onChange={this.setFactAdress} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="category">
                                <Form.Label>Льготная категория</Form.Label>
                                <Form.Control as="select" defaultValue={this.props.userData.privilege} onChange={this.setPrivilege}>
                                    <option>Пенсионер</option>
                                    <option>Инвалид</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </div>
                    <hr/>
                    <div className="UserChange__passport">
                        <h3>Паспортные данные</h3>
                        <Form.Row>
                            <Form.Group as={Col} controlId="serie">
                                <Form.Label>Серия</Form.Label>
                                <Form.Control type="number" placeholder="Введите серию паспорта" defaultValue={this.props.userData.passportSerie} onChange={this.setSerie} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="number">
                                <Form.Label>Номер</Form.Label>
                                <Form.Control type="number" placeholder="Введите номер паспорта" defaultValue={this.props.userData.passportNumber} onChange={this.setNumber} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="giveDate">
                                <Form.Label>Дата выдачи</Form.Label>
                                <Form.Control type="date" placeholder="Введите дату выдачи" defaultValue={this.props.userData.passportDate} onChange={this.setPassportDate} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="given">
                                <Form.Label>Выдан</Form.Label>
                                <Form.Control type="text" placeholder="Укажите кем выдан паспорт" defaultValue={this.props.userData.passportLocation} onChange={this.setPassportLocation} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="regAdress">
                                <Form.Label>Адрес регистрации</Form.Label>
                                <Form.Control type="text" placeholder="Укажите адрес регистрации" defaultValue={this.props.userData.regAdress} onChange={this.setRegAdress} />
                            </Form.Group>

                        </Form.Row>
                    </div>
                    {/* {validate ? */}
                        {/* <Button variant="primary" type="submit" disabled>Редактировать</Button> : */}
                        <Button variant="primary" type="submit" onClick={this.changeDataHandler}>Сохранить</Button>
                    {/* } */}
                    <NavLink to={'/user'}>
                        <Button variant="secondary" type="submit">Назад</Button>
                    </NavLink>
                    <small>Обратите внимание, что все поля обязательны к заполнению!</small>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userId: state.userAuthReducer.userId,
        userData: state.userAuthReducer.userData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        renderData: () => dispatch(renderData())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserChange));