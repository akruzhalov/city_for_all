import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class Shops extends Component {
    render() {
        return (
            <div className={'Shops container-fluid'}>
                <Row>
                    <Col lg={12}>
                        <div className="Shops__head">
                            <h1>Магазины</h1>
                            <h3>Заказ продуктов первой необходимости</h3>
                            {/* <a href="tel:+73493829205">
                                <Button variant={'primary'}>Позвонить</Button>
                            </a>
                            <a href="http://кцсон-муравленко.янао.рф/index.php?option=com_content&view=featured&Itemid=479">
                                <Button variant={'primary'}>Узнать подробнее</Button>
                            </a> */}
                        </div>
                        <div className="Shops__points">
                            <Container fluid>
                                <Row>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Мясо, рыба, молоко, яйца.</p>
                                    </Col>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Хлеб, выпечка и мука.</p>
                                    </Col>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Крупы и макаронные изделия..</p>
                                    </Col>
                                    <Col lg={3}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Черный чай и масло</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="Shops__info">
                            <p>
                                <b>Магазины</b> "Карина" и "Горячий хлеб" предоставляют возможность заказа продуктов питания на дом с возможностью оплаты при получении.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Shops;