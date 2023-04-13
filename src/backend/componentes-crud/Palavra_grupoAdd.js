import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Palavra_grupoAdd extends React.Component {
  state = {
    plvID: "",
    grpID: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      plvID: this.state.plvID,
      grpID: this.state.grpID

    };

    axios
      .post(`https://flaskEdson.matheusgamarra.repl.co/palavra_grupos`, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
            plvID:
            <input
              type="number"
              name="plvID"
              onChange={this.handleChange}
              value={this.state.plvID}
              className="form-control"
            />
          </label>
        
          <br />
          <label htmlFor="name">
            grpID:
            <input
              type="number"
              name="grpID"
              onChange={this.handleChange}
              value={this.state.grpID}
              className="form-control"
            />
          </label>
        
          <br />
          <br />
          <button type="submit" className="btn btn-primary">Adicionar PALAVRA_GRUPO!</button>
        </form>
      </div>
    );
  }
}
