import React from "react";
import axios from "axios";

export default class Pergunta_grupoRemove extends React.Component {
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
        `https://flaskEdson.matheusgamarra.repl.co/pergunta_grupos/${this.state.pgtID}`
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
            pgt ID de pergunta_grupo:
            <input type="number" name="pgtID" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
