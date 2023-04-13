import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class PersonAdd extends React.Component {
  state = {
    nome: "",
    senha: "",
    userID: "",
    email: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      nome: this.state.nome,
      email: this.state.email,
      userID: this.state.userID,
      senha: this.state.senha
    };

    axios
      .post(`https://flaskEdson.matheusgamarra.repl.co/usuarios`, user)
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
            Nome:
            <input
              type="text"
              name="nome"
              onChange={this.handleChange}
              value={this.state.nome}
              className="form-control"
            />
          </label>
        
          <br />
          <label>
            Senha:
            <input
              type="password"
              name="senha"
              onChange={this.handleChange}
              value={this.state.senha}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              className="form-control"
            />
          </label>
          <br />
          <br />
          <button type="submit" className="btn btn-primary">Fazer cadastro!</button>
        </form>
        <p>Já possui uma conta?</p>
            <button id="btn-reg" className="btn btn-primary">
              <Link className="link" to="/login">
                Entre!
              </Link>
            </button>
      </div>
    );
  }
}
