import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';

class Pharmacies extends Component {
    render() {
        return (
            <div className={'Pharmacies container-fluid'}>
                <Row>
                    <Col lg={12}>
                        <div className="Pharmacies__head">
                            <h1>Аптеки</h1>
                            <h3>Доставка лекарств</h3>
                            <a href="tel:+73493829205">
                                <Button variant={'primary'}>Позвонить</Button>
                            </a>
                            <Button variant={'primary'}>Узнать подробнее</Button>
                        </div>
                        <div className="Pharmacies__points">
                            <Container fluid>
                                <Row>
                                    <Col lg={4} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Соблюденные срок и условия хранения всей медицинской продукции.</p>
                                    </Col>
                                    <Col lg={4} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Низкие розничные цены.</p>
                                    </Col>
                                    <Col lg={4} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Оптовые цены на некоторые группы товаров.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="Pharmacies__info">
                            <p>
                                <b>Заказ</b> лекарственных препаратов, медицинских изделий и технических средств реабилитации с доставкой на дом.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Pharmacies;