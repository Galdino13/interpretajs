import React from "react";
import axios from "axios";

export default class PersonRemove extends React.Component {
  state = {
    grpID: ""
  };

  handleChange = (event) => {
    this.setState({ grpID: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .delete(
        `https://flaskEdson.matheusgamarra.repl.co/grupos/${this.state.grpID}`
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
            Grupo ID:
            <input type="number" name="grpID" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
