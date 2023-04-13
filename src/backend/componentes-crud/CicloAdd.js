import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class CicloAdd extends React.Component {
  state = {
    cicID: "",
    cicDesc: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      cicID: this.state.cicID,
      cicDesc: this.state.cicDesc

    };

    axios
      .post(`https://flaskEdson.matheusgamarra.repl.co/ciclos`, user)
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
            cicID:
            <input
              type="number"
              name="cicID"
              onChange={this.handleChange}
              value={this.state.cicID}
              className="form-control"
            />
          </label>
        
          <br />
          <label htmlFor="name">
            cicDesc:
            <input
              type="text"
              name="cicDesc"
              onChange={this.handleChange}
              value={this.state.cicDesc}
              className="form-control"
            />
          </label>
        
          <br />
          <br />
          <button type="submit" className="btn btn-primary">Adicionar Ciclo!</button>
        </form>
      </div>
    );
  }
}
