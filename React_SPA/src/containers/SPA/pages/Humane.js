import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class Humane extends Component {
    render() {
        return (
            <div className={'Humane container-fluid'}>
                <Row>
                    <Col lg={12}>
                        <div className="Humane__head">
                            <h1>Гуманитарные Комнаты</h1>
                            <h3>Помощь нуждающимся семьям</h3>
                            <a href="tel:+73493829205">
                                <Button variant={'primary'}>Позвонить</Button>
                            </a>
                            <a href="http://кцсон-муравленко.янао.рф/index.php?option=com_content&view=featured&Itemid=479">
                                <Button variant={'primary'}>Узнать подробнее</Button>
                            </a>
                        </div>
                        <div className="Humane__points">
                            <Container fluid>
                                <Row>
                                    <Col lg={4} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Гуманитарная комната организована общественной организацией "Семья Муравленко".</p>
                                    </Col>
                                    <Col lg={4} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Нуждающимся может быть предоставлена одежда и обувь.</p>
                                    </Col>
                                    <Col lg={4}>
                                        <i className="fa fa-check-circle"/>
                                        <p>Гуманитарная комната находится в ТЦ "Ямал" и работает с 10:00 до 17:00, кроме понедельника и вторника..</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="Humane__info">
                            <p>
                                <b>Активисты общественной организации</b> «Семья Муравленко» приглашают жителей, которые оказались в трудной жизненной ситуации, в гуманитарную комнату. Общественники помогут подобрать необходимые вещи и обувь, которые собрали неравнодушные жители города.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Humane;