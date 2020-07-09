import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class UserList extends Component {
    goToCurrentUser = () => {
        this.props.history.push({
            pathname: `/admin/dashboard/${this.props.id}`,
            state: this.props.userData
        })
    };
    render() {
        return (
            <div className="UserList card container-fluid" onClick={this.goToCurrentUser}>
                <div className="card-body row">
                    <div className="col-lg-3">
                        <p>{this.props.name}</p>
                    </div>
                    <div className="col-lg-3">
                        <p>{this.props.email}</p>
                    </div>
                    <div className="col-lg-3">
                        <p>{this.props.phone}</p>
                    </div>
                    <div className="col-lg-3">
                        {this.props.orders === undefined ?
                            <p>Заказов: 0</p> :
                            <p>Заказов: {Object.keys(this.props.orders).length}</p>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(UserList);