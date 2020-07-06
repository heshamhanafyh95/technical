import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            loading: true
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentDidMount() {
        axios
            .get('/getUsers', {
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => {
                this.setState({
                    users: res.data,
                    loading: false
                })
            })
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        // console.log(e.currentTarget.value);
        await axios
            .delete(`/users/${e.target.value}`, {
                headers: { 'Content-Type': 'application/json' }
            })
            .then(function (response) {
                window.location.href = "/users"
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        if (!this.state.loading) {
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Dashboard</div>

                                <div className="card-body">

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th width="280px">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.users.map((user) =>
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                        <Link className="btn btn-primary mr-4" to={"/users/show/" + user.id}>Show</Link>
                                                        <Link className="btn btn-success mr-4" to={"/users/edit/" + user.id}>Edit</Link>
                                                        <button onClick={this.onSubmitHandler} className="btn btn-danger" value={user.id}>Delete</button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }

    }

}
export default Home

