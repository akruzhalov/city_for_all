import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import {NavLink} from "react-router-dom";

class Taxi extends Component {
    render() {
        return (
            <div className={'Taxi container-fluid'}>
                <Row>
                    <Col lg={12}>
                        <div className="Taxi__head">
                            <h1>Такси</h1>
                            <h3>Перемещение по городу</h3>
                            <Button variant={'primary'}>Подробнее</Button>
                            <NavLink to={'/taxiquery'}>
                                <Button variant={'primary'}>Заказать</Button>
                            </NavLink>
                        </div>
                        <div className="Taxi__points">
                            <Container fluid>
                                <Row>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Подача транспорта по указанному времени к пункту назначения.</p>
                                    </Col>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Помощь при посадке и высадке.</p>
                                    </Col>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Сопровождение.</p>
                                    </Col>
                                    <Col lg={3}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Предоставление кресла-коляски или ходунков.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="Taxi__info">
                            <p>
                                <b>Служба "Социальное такси"</b> может оказать услуги по перевозке и сопровождению малоподвижных граждан по городу, а так же осуществить перевозку в г. Ноябрьск. Льготной категории граждан услуги предоставляются бесплатно.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Taxi;