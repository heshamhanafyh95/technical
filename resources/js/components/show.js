import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'


class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true
        }
    }

    componentDidMount() {
        // console.log(window.location.pathname);
        axios
            .get(window.location.pathname, {
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => {
                this.setState({
                    user: res.data,
                    loading: false
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {

        if (!this.state.loading) {
            console.log(this.state);
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Dashboard</div>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6 margin-tb">
                                            <div className="pull-left">
                                                <h2> Show User</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 margin-tb">
                                            <div className="pull-right">
                                                <Link className="btn btn-success" to={"/users"}>Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Email</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <td>{this.state.user.id}</td>
                                            <td>{this.state.user.name}</td>
                                            <td>{this.state.user.email}</td>
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
export default Show

