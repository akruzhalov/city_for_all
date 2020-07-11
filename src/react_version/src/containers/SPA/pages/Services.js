import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {withRouter} from "react-router-dom";

class Services extends Component {
    goToOrder = () => {
        if (localStorage.userId !== undefined) {
            this.props.history.push('/user/new_order')
        } else {
            this.props.history.push('/panel/login')
        }
    };
    render() {
        return (
            <div className={'Services container-fluid'}>
                <Row>
                    <Col lg={12}>
                        <div className="Services__head">
                            <h1>Центр социального обслуживания</h1>
                            <h3>Психологическая помощь</h3>
                            <a href="http://кцсон-муравленко.янао.рф/index.php?option=com_content&view=featured&Itemid=479">
                                <Button variant={'primary'}>Подробнее</Button>
                            </a>
                            <Button variant={'primary'} onClick={this.goToOrder}>Заказать няню</Button>
                        </div>
                        <div className="Services__points">
                            <Container fluid>
                                <Row>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Психологическое консультирование, снятие депрессивного и стрессового состояния.</p>
                                    </Col>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Услуги няни, сиделки.</p>
                                    </Col>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Предоставление технических средств реабилитации.</p>
                                    </Col>
                                    <Col lg={3}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Сопровождение ребенка в школу, детский сад или место дополнительного образования</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="Services__info">
                            <p>
                                <b>Сотрудники Центра социального обслуживания</b> могут оказать 
                                профессиональную психологическую поддержку людям, оказавшимся в 
                                трудной жизненной ситуации.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(Services);