import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Pergunta_grupoAdd extends React.Component {
  state = {
    pgtID: "",
    grpID: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      pgtID: this.state.pgtID,
      grpID: this.state.grpID

    };

    axios
      .post(`https://flaskEdson.matheusgamarra.repl.co/pergunta_grupos`, user)
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
            pgtID:
            <input
              type="number"
              name="pgtID"
              onChange={this.handleChange}
              value={this.state.pgtID}
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
        
          <br/>
          <br />
          <button type="submit" className="btn btn-primary">Adicionar PERGUNTA_GRUPO!</button>
        </form>
      </div>
    );
  }
}
