import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <div className={'Contacts container-fluid'}>
                <Row>
                    <Col lg={6}>
                        <h1>Контакты</h1>
                        <div className="telephones">
                            <h3>Номер телефона:</h3>
                            <p>+7 (34938) 29-205</p>
                        </div>
                        <div className="line"/>
                        <div className="mail">
                            <h3>E-mail:</h3>
                            <p>cso.muravlenko@dszn.yanao.ru</p>
                        </div>
                        <div className="line"/>
                        <div className="office">
                            <h3>Наш офис:</h3>
                            <p>Город Муравленко, Др. Народов 32/2. Вход со двора.</p>
                        </div>
                        <div className="line"/>
                        <div className="work">
                            <h3>Режим работы:</h3>
                            <p>Социального такси: <br/> <span>08:30-17:00</span></p>
                            <p>Волонтеров: <br/> <span>14:00-20:00</span></p>
                            <p>Няни: <br/> <span>08:00-18:00</span></p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <iframe
                            style={{border: '1px solid #dbdbdb', borderRadius: '10px'}}
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A6ea0587e035d5e3e7cfaa900eeb52e57685f3ac758407a880f8690d7fc3db32d&amp;source=constructor"
                            width="100%"
                            height="565"
                            frameBorder="0"
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contacts;