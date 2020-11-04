import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    message: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/api/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        this.props.history.push("/");
        console.log(response);
        this.props.setUser(response.data);
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
        {this.state.message && <p>{this.state.message}</p>}
      </React.Fragment>
    );
  }
}
