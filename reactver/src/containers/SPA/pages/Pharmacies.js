import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

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
                            <a href="http://кцсон-муравленко.янао.рф/index.php?option=com_content&view=featured&Itemid=479">
                                <Button variant={'primary'}>Узнать подробнее</Button>
                            </a>
                        </div>
                        <div className="Pharmacies__points">
                            <Container fluid>
                                <Row>
                                    <Col lg={4} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Соблюденные срок и условия хранения всей медицинской продукции.</p>
                                    </Col>
                                    <Col lg={4} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Низкие розничные цены.</p>
                                    </Col>
                                    <Col lg={4} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
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