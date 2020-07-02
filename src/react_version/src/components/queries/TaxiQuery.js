import React, {Component} from 'react';
import {Button, Col, Form} from "react-bootstrap";

class TaxiQuery extends Component {
    render() {
        return (
            <div className="NannyQuery">
                <div className="content">
                    <h1>Заказ такси</h1>
                    <h3>Заказ принимается не позднее 1 дня по телефону</h3>
                    <a href="tel:+73493829205">+7(349)-382-92-05</a>
                </div>
                <Form>
                    <h3>Основная информация</h3>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>ФИО родителя</Form.Label>
                            <Form.Control type="text" placeholder="Иванов Иван Иванович" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Дата Рождения</Form.Label>
                            <Form.Control type="number" placeholder="06.11.1994" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAddress2">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control type="text" data-format="+7 (ddd) ddd-dd-dd" placeholder="+7 913 254 93 22" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridAddress2">
                            <Form.Label>Категория</Form.Label>
                            <Form.Control type="text" placeholder="Инвалид/Гражданин пожилого возраста" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Даю согласие на обработку персоональных данных" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Отправить
                    </Button>
                </Form>
            </div>
        );
    }
}

export default TaxiQuery;