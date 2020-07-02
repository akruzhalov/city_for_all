import React, {Component} from 'react';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "./components/Layout";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout/>
            </div>
        );
    }
}

export default App;