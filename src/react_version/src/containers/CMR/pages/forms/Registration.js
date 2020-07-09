import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import {userAuth} from "../../../../store/actions/userAuthActions";
import {connect} from "react-redux";

class Registration extends Component {
    state = {
        email: '',
        password: '',
        repeatedPassword: '',
        firstName: '',
        secondName: '',
        lastName: ''
    };
    setEmail = event => {
      this.setState({email: event.target.value})
    };
    setPassword = event => {
        this.setState({password: event.target.value})
    };
    setRepeatedPassword = event => {
        this.setState({repeatedPassword: event.target.value})
    };
    setFirstName= event => {
        this.setState({firstName: event.target.value})
    };
    setSecondName = event => {
        this.setState({secondName: event.target.value})
    };
    setLastName = event => {
        this.setState({lastName: event.target.value})
    };
    registerHandler = event => {
      event.preventDefault();
      this.props.userAuth(
          this.state.email,
          this.state.password,
          false,
          this.state.firstName,
          this.state.secondName,
          this.state.lastName
      )
    };
    render() {
        const validate = (this.state.password === this.state.repeatedPassword)
        && (this.state.password.length > 5)
        && (this.state.repeatedPassword.length > 5)
        && (this.state.email !== '')
        && (this.state.password !== '')
        && (this.state.repeatedPassword !== '')
        && (this.state.firstName !== '')
        && (this.state.secondName !== '')
        && (this.state.lastName !== '');
        return (
            <div className={'Registration'}>
                <div className="Registration__content">
                    <div className="block1">
                        <div className="preview-info">
                            <h3>Город для всех</h3>
                            <h5>Добро пожаловать в город</h5>
                        </div>
                        <div className="enter-form">
                            <input type="email" placeholder="Email" onChange={this.setEmail}/>
                            <input type="password" placeholder="Пароль" onChange={this.setPassword}/>
                            <input type="password" placeholder="Повторите пароль" onChange={this.setRepeatedPassword}/>
                            <input type="text" placeholder="Фамилия" onChange={this.setSecondName}/>
                            <input type="text" placeholder="Имя" onChange={this.setFirstName}/>
                            <input type="text" placeholder="Отчество" onChange={this.setLastName}/>
                            {validate ?
                                <button onClick={this.registerHandler}>Зарегестрироваться</button> :
                                <button disabled>Зарегестрироваться</button>
                            }
                            {this.props.isReg === true ?
                                <Redirect to={'/panel/login'} /> :
                                <small className={'error'}>{this.props.message}</small>
                            }
                            <small className={'alert-text'}>
                                Должны быть заполнены все поля формы
                                <br/>
                                Пароль должен содержать не менее 6 символов
                            </small>
                        </div>
                        <div className="links">
                            <p>Уже есть аккаунт? <NavLink to="/panel/login">Войти</NavLink></p>
                        </div>
                    </div>
                    <div className="block2"/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        message: state.userAuthReducer.message,
        isReg: state.userAuthReducer.isReg
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAuth: (email, password, isLogin, firstName, secondName, lastName) => dispatch(userAuth(email, password, isLogin, firstName, secondName, lastName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);