import React from "react";
import axios from "axios";

export default class PersonRemove extends React.Component {
  state = {
    plvID: ""
  };

  handleChange = (event) => {
    this.setState({ plvID: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .delete(
        `https://flaskEdson.matheusgamarra.repl.co/palavras/${this.state.plvID}`
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
            Palavra ID:
            <input type="number" name="plvID" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
