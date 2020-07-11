import React, {Component} from 'react';
import {Row} from "react-bootstrap";

class Main extends Component {
    render() {
        return (
            <div className={'Main container-fluid'}>
                <Row>
                    <h1>Город для всех</h1>
                    <div className="line"/>
                    <h5>“Утратить физическую независимость не означает расстаться с жизнью..”</h5>
                    <small>– Филипп Поццо ди Борго</small>
                </Row>
            </div>
        );
    }
}

export default Main;