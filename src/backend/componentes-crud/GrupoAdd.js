import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class GrupoAdd extends React.Component {
  state = {
    grpID: "",
    grpDesc: "",
    cicID: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      grpID: this.state.grpID,
      grpDesc: this.state.grpDesc,
      cicID: this.state.cicID

    };

    axios
      .post(`https://flaskEdson.matheusgamarra.repl.co/grupos`, user)
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
          <label htmlFor="name">
            grpDesc:
            <input
              type="text"
              name="grpDesc"
              onChange={this.handleChange}
              value={this.state.grpDesc}
              className="form-control"
            />
          </label>
          <br />
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
          <br />
          <button type="submit" className="btn btn-primary">Adicionar Grupo!</button>
        </form>
      </div>
    );
  }
}
