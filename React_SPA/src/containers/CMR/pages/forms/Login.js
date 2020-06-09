import React, {Component} from 'react';
import {NavLink, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {userAuth} from "../../../../store/actions/userAuthActions";

class Login extends Component {
    state = {
      email: '',
      password: '',
      errorMessage: ''
    };
    setEmail = event => {
      this.setState({email: event.target.value})
    };
    setPassword = event => {
        this.setState({password: event.target.value})
    };
    loginHandler = async event => {
        event.preventDefault();
        this.props.userAuth(
            this.state.email,
            this.state.password,
            true
        )
    };
    render() {
        const validate = (this.state.email !== '')
        && (this.state.password !== '');
        return (
            <div className={'Login'}>
                <div className="Login__content">
                    <div className="block1">
                        <div className="preview-info">
                            <h3>Город для всех</h3>
                            <h5>Добро пожаловать обратно</h5>
                        </div>
                        <div className="enter-form">
                            <input type="email" placeholder="Email" onChange={this.setEmail}/>
                            <input type="password" placeholder="Пароль" onChange={this.setPassword}/>
                            {validate ?
                                <button onClick={this.loginHandler}>Войти</button> :
                                <button disabled>Войти</button>
                            }
                            {this.props.message !== '' ?
                                <small className={'error'}>{this.props.message}</small> :
                                null
                            }
                        </div>
                        <div className="links">
                            <p>Еще нет аккаунта? <NavLink to="/panel/registration">Зарегестрироваться</NavLink></p>
                            <p>Забыли пароль? <a href="/">Восстановить</a></p>
                        </div>
                    </div>
                    <div className="block2"/>
                </div>
                {localStorage.token !== undefined ?
                    <Redirect to={'/user'} /> :
                    <Redirect to={'/panel/login'} />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.userAuthReducer.token,
        message: state.userAuthReducer.message
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAuth: (email, password, isLogin) => dispatch(userAuth(email, password, isLogin))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));