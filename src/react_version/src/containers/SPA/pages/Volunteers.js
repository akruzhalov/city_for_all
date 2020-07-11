import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class Volunteers extends Component {
    render() {
        return (
            <div className={'Volunteers container-fluid'}>
                <Row>
                    <Col lg={12}>
                        <div className="Volunteers__head">
                            <h1>Волонтеры</h1>
                            <h3>Помощь оказывается бесплатно</h3>
                            <a href="tel:+73493829205">
                                <Button variant={'primary'}>Позвонить</Button>
                            </a>
                            <a href="http://кцсон-муравленко.янао.рф/index.php?option=com_content&view=featured&Itemid=479">
                                <Button variant={'primary'}>Узнать подробнее</Button>
                            </a>
                        </div>
                        <div className="Volunteers__points">
                            <Container fluid>
                                <Row>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Уборка жилого помещения мытье посуды, вынос мусора.</p>
                                    </Col>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Покупка продуктов первой необходимости.</p>
                                    </Col>
                                    <Col lg={3} style={{borderRight: '1px solid #bdbdbd'}}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Сопровождение, выгул домашних живтоных.</p>
                                    </Col>
                                    <Col lg={3}>
                                        <i className="fa fa-check-circle"></i>
                                        <p>Приготовление пищи, продуктов и их доставка.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="Volunteers__info">
                            <p>
                                <b>Волонтёры</b> - это обычные люди, которые готовы вложить частичку 
                                себя в доброе дело. Если вы ограничены в передвижении, не можете 
                                обеспечить себя даже самым необходимым, вам может потребоваться помощь 
                                волонтёра. Услуги волонтёров вы можете заказать по номеру телефона  
                                <a href="tel:+73493829205">+7 (34938) 29-205</a>.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Volunteers;