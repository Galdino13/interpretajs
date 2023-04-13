import React from "react";
import axios from "axios";

export default class CicloRemove extends React.Component {
  state = {
    cicID: ""
  };

  handleChange = (event) => {
    this.setState({ cicID: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .delete(
        `https://flaskEdson.matheusgamarra.repl.co/ciclos/${this.state.cicID}`
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
            Ciclo ID:
            <input type="number" name="cicID" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
