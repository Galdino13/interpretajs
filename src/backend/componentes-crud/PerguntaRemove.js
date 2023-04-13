import React from "react";
import axios from "axios";

export default class PersonRemove extends React.Component {
  state = {
    pgtID: ""
  };

  handleChange = (event) => {
    this.setState({ pgtID: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .delete(
        `https://flaskEdson.matheusgamarra.repl.co/perguntas/${this.state.pgtID}`
      )
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
            Pergunta ID:
            <input type="number" name="pgtID" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
