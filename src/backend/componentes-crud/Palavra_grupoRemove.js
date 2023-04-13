import React from "react";
import axios from "axios";

export default class CicloRemove extends React.Component {
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
        `https://flaskEdson.matheusgamarra.repl.co/ciclos/${this.state.plvID}`
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
            plv ID de palavra_grupo:
            <input type="number" name="plvID" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
