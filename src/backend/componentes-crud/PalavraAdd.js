import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class PalavraAdd extends React.Component {
  state = {
    plvID: "",
    plvNome: "",
    plvClasse: "",
    plvSgn: "",
    dicID: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      plvID: this.state.plvID,
      plvNome: this.state.plvNome,
      plvClasse: this.state.plvClasse,
      plvSgn: this.state.plvSgn,
      dicID: this.state.dicID

    };

    axios
      .post(`https://flaskEdson.matheusgamarra.repl.co/palavras`, user)
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
            plvNome:
            <input
              type="text"
              name="plvNome"
              onChange={this.handleChange}
              value={this.state.plvNome}
              className="form-control"
            />
          </label>
        
          <br />
          <label htmlFor="name">
            plvSgn:
            <input
              type="text"
              name="plvSgn"
              onChange={this.handleChange}
              value={this.state.plvSgn}
              className="form-control"
            />
          </label>
        
          <br />
          <label>
            plvClasse:
            <input
              type="text"
              name="plvClasse"
              onChange={this.handleChange}
              value={this.state.plvClasse}
              className="form-control"
            />
          </label>
          <br />
          <label>
            plvID:
            <input
              type="number"
              name="plvID"
              onChange={this.handleChange}
              value={this.state.plvId}
              className="form-control"
            />
          </label>
          <br />
          <label>
            dicID:
            <input
              type="number"
              name="dicID"
              onChange={this.handleChange}
              value={this.state.dicId}
              className="form-control"
            />
          </label>
          <br />
          <button type="submit" className="btn btn-primary">Adicionar palavra!</button>
        </form>
      </div>
    );
  }
}
