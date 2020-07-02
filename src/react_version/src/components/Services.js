import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import {NavLink} from "react-router-dom";

class Services extends Component {
    render() {
        return (
            <div className={'Services container-fluid'}>
                <Row>
                    <Col lg={12}>
                        <div className="Services__head">
                            <h1>Центр социального обслуживания</h1>
                            <h3>Психологическая помощь</h3>
                            <Button variant={'primary'}>Подробнее</Button>
                            <NavLink to={'/nannyquery'}>
                                <Button variant={'primary'}>Заказать няню</Button>
                            </NavLink>
                        </div>
                        <div className="Services__points">
                            <Container fluid>
                                <Row>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Психологическое консультирование, снятие депрессивного и стрессового состояния.</p>
                                    </Col>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Услуги няни, сиделки.</p>
                                    </Col>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Предоставление технических средств реабилитации.</p>
                                    </Col>
                                    <Col lg={3}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Сопровождение ребенка в школу, детский сад или место дополнительного образования</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="Services__info">
                            <p>
                                <b>Сотрудники Центра социального обслуживания</b> могут оказать профессиональную психологическую поддержку людям, оказавшимся в трудной жизненной ситуации. Льготной категории граждан услуги предоставляются бесплатно.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Services;