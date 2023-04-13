import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class PersonAdd extends React.Component {
  state = {
    pgtID: "", 
    pgtDes: "",
    pgtRes: "",
    pgtAltFls1: "",
    pgtAltFls2: "", 
    pgtAltFls3: "", 
    pgtTipo: "",
    pgtDif: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {

    pgtID: this.state.pgtID, 
    pgtDes: this.state.pgtDes, 
    pgtRes: this.state.pgtRes, 
    pgtAltFls1: this.state.pgtAltFls1, 
    pgtAltFls2: this.state.pgtAltFls2, 
    pgtAltFls3: this.state.pgtAltFls3,  
    pgtTipo: this.state.pgtTipo,  
    pgtDif: this.state.pgtDif

    };

    axios
      .post(`https://flaskEdson.matheusgamarra.repl.co/perguntas`, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>
            pgtID:
            <input
              type="number"
              name="pgtID"
              onChange={this.handleChange}
              value={this.state.pgtId}
              className="form-control"
            />
          </label>
          <br />
          <label htmlFor="name">
            pgtDes:
            <input
              type="text"
              name="pgtDes"
              onChange={this.handleChange}
              value={this.state.pgtDes}
              className="form-control"
            />
          </label>
        
          <br />
          <label htmlFor="name">
            pgtRes:
            <input
              type="text"
              name="pgtRes"
              onChange={this.handleChange}
              value={this.state.pgtRes}
              className="form-control"
            />
          </label>
        
          <br />
          <label htmlFor="name">
            pgtAltFls1:
            <input
              type="text"
              name="pgtAltFls1"
              onChange={this.handleChange}
              value={this.state.pgtAltFls1}
              className="form-control"
            />
          </label>
          <br />
          <label htmlFor="name">
            pgtAltFls2:
            <input
              type="text"
              name="pgtAltFls2"
              onChange={this.handleChange}
              value={this.state.pgtAltFls2}
              className="form-control"
            />
          </label>
          <br />
          <label htmlFor="name">
            pgtAltFls3:
            <input
              type="text"
              name="pgtAltFls3"
              onChange={this.handleChange}
              value={this.state.pgtAltFls3}
              className="form-control"
            />
          </label>
          <br />
          <label>
            pgtTipo:
            <input
              type="text"
              name="pgtTipo"
              onChange={this.handleChange}
              value={this.state.pgtTipo}
              className="form-control"
            />
          </label>
          <br />
          <label>
            pgtDif:
            <input
              type="text"
              name="pgtDif"
              onChange={this.handleChange}
              value={this.state.pgtDif}
              className="form-control"
            />
          </label>
          <br />
          <br />
          <button type="submit" className="btn btn-primary">Adicionar Pergunta!</button>
        </form>
      </div>
    );
  }
}
