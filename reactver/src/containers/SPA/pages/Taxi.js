import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {withRouter} from "react-router-dom";

class Taxi extends Component {
    goToOrder = () => {
        if (localStorage.userId !== undefined) {
            this.props.history.push('/user/new_order')
        } else {
            this.props.history.push('/panel/login')
        }
    };
    render() {
        return (
            <div className={'Taxi container-fluid'}>
                <Row>
                    <Col lg={12}>
                        <div className="Taxi__head">
                            <h1>Такси</h1>
                            <h3>Перемещение по городу</h3>
                            <a href="http://кцсон-муравленко.янао.рф/index.php?option=com_content&view=featured&Itemid=479">
                                <Button variant={'primary'}>Подробнее</Button>
                            </a>
                            <Button variant={'primary'} onClick={this.goToOrder}>Заказать</Button>
                        </div>
                        <div className="Taxi__points">
                            <Container fluid>
                                <Row>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Подача транспорта по указанному времени к пункту назначения.</p>
                                    </Col>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Помощь при посадке и высадке.</p>
                                    </Col>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Сопровождение.</p>
                                    </Col>
                                    <Col lg={3}>
                                        <i className="fa fa-check-circle"/>
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

export default withRouter(Taxi);