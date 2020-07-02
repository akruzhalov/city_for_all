import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';

class Cleaning extends Component {
    render() {
        return (
            <div className={'Cleaning container-fluid'}>
                <Row>
                    <Col lg={12}>
                        <div className="Cleaning__head">
                            <h1>Уборка помещений</h1>
                            <h3>Уборка</h3>
                            <a href="tel:+73493829205">
                                <Button variant={'primary'}>Позвонить</Button>
                            </a>
                            <Button variant={'primary'}>Узнать подробнее</Button>
                        </div>
                        <div className="Cleaning__points">
                            <Container fluid>
                                <Row>
                                    <Col lg={6} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Уборка квартир</p>
                                    </Col>
                                    <Col lg={6}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Уборка домов и котеджей</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="Cleaning__info">
                            <p>
                                <b>Наши волонтеры</b> предлагают услуги по уборке и отчиске помещений. Льготной категории граждан услуги предоставляются бесплатно.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Cleaning;