import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            id: '',
            loading: true
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    componentDidMount() {
        const words = window.location.pathname.split('/');
        axios
            .get("/users/show/" + words[3], {
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => {
                this.setState({
                    name: res.data.name,
                    email: res.data.email,
                    id: res.data.id,
                    loading: false
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async onSubmitHandler(e) {
        e.preventDefault();
        // console.log(e.currentTarget.value);${e.target.value}
        await axios
            .put(window.location.pathname,
                {
                    name: this.state.name,
                    email: this.state.email
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )
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
                                    <div className="row">
                                        <div className="col-lg-6 margin-tb">
                                            <div className="pull-left">
                                                <h2>Edit User</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-tb">
                                            <div className="pull-right">
                                                <Link className="btn btn-success" to={"/users"}>Back</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <strong>Name:</strong>
                                                <input type="text" name="name" onChange={this.onChangeHandler} value={this.state.name} className="form-control"
                                                    placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <strong>Email:</strong>
                                                <input className="form-control" type="email" name="email"
                                                    placeholder="Email" value={this.state.email} onChange={this.onChangeHandler} required />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                                            <button onClick={this.onSubmitHandler} className="btn btn-primary">Edit</button>
                                        </div>
                                    </div>

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
export default Edit

