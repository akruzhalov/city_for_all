import React, {Component} from 'react';
import {Button, Col, Form, Nav, Row, Tab} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import axios from 'axios';
import {connect} from "react-redux";
import {renderData} from "../../../../store/actions/userAuthActions";

class UserOrder extends Component {
    state = {
        nannyDay: '',
        nannyTime: ''
    };
    componentDidMount() {
        this.props.renderData()
    }

    taxiOrder = async () => {
        const orderDate = new Date();
        try {
            await axios.post(`https://city-for-all-9f11c.firebaseio.com/users/${localStorage.userId}/${this.props.userId}/orders.json`, {
                orderDate: orderDate,
                orderCategory: 'Заказ Такси'
            });
            this.props.history.push('/user')
        } catch (e) {
            console.log(e)
        }
    };
    nannyOrder = async () => {
        const orderDate = new Date();
        try {
            await axios.post(`https://city-for-all-9f11c.firebaseio.com/users/${localStorage.userId}/${this.props.userId}/orders.json`, {
                orderDate: orderDate,
                orderCategory: 'Заказ Няни',
                orderDay: this.state.nannyDay,
                orderTime: this.state.nannyTime
            });
            this.props.history.push('/user')
        } catch (e) {
            console.log(e)
        }
    };
    setNannyDay = event => {
        this.setState({nannyDay: event.target.value})
    };
    setNannyTime = event => {
        this.setState({nannyTime: event.target.value})
    };
    render() {
        return (
            <div className={'UserOrder'}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="taxi">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="taxi">Заказать такси</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="nanny">Заказать няню</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="taxi">
                                    <div className="taxi-content">
                                        <h3>Заказ такси</h3>
                                        <p>Заказать такси с текущими данными профиля</p>
                                        <Button variant={'primary'} onClick={this.taxiOrder}>Заказать такси</Button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="nanny">
                                    <div className="nanny-content">
                                        <h3>Заказ няни</h3>
                                        <p>Заказать няню с текущими данными профиля</p>
                                        <Form>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="orderDay">
                                                    <Form.Label>Укажите день заказа</Form.Label>
                                                    <Form.Control type="date" placeholder="02.06.2020" onChange={this.setNannyDay} />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="orderTime">
                                                    <Form.Label>Укажите предпочитаемое время</Form.Label>
                                                    <Form.Control type="text" placeholder="18:00 - 20:00" onChange={this.setNannyTime} />
                                                </Form.Group>
                                            </Form.Row>
                                        </Form>
                                        <Button variant={'primary'} onClick={this.nannyOrder}>Заказать няню</Button>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserOrder));