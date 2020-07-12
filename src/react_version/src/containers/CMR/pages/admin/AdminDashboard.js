import React, {Component} from 'react';
import UserList from "./userOption/UserList";
import axios from "axios";

class AdminDashboard extends Component {
    state = {
        users: []
    };

    async componentDidMount() {
        try {
            const response = await axios.get('https://city-for-all-9f11c.firebaseio.com/users.json');
            const users = Object.entries(response.data).map((userListId) => {
                return (
                    Object.entries(userListId[1]).map((user) => {
                        return {
                            userId: user[0],
                            userData: user[1]
                        }
                    })
                )
            });
            this.setState({users})
        } catch (e) {
            console.log(e)
        }
    };
    render() {
        return (
            <div className={'AdminDashboard'}>
                <h3>Список пользователей</h3>
                <div className="AdminDashboard__users card">
                    <div className="card-body">
                        {this.state.users.map((user, index) => {
                            return (
                                <UserList
                                    key={user+index}
                                    id={user[0].userId}
                                    name={`${user[0].userData.secondName} ${user[0].userData.firstName} ${user[0].userData.lastName}`}
                                    email={user[0].userData.email}
                                    phone={user[0].userData.phone}
                                    orders={user[0].userData.orders}
                                    userData={user[0].userData}
                                />
                            )
                            // console.log(user[0])
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;