import React from "react";

export default class CicloList extends React.Component {
  state = { persons: [] };

  componentDidMount() {
    fetch("https://flaskEdson.matheusgamarra.repl.co/ciclos")
      .then((response) => response.json())
      .then((personsList) => {
        this.setState({ persons: personsList });
      });
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>cicID</th>
            <th>cicDesc</th>
          </tr>
        </thead>
        <tbody>
          {this.state.persons.map((person) => (
            <tr key={person.cicID}>
              <td>{person.cicID}</td>
              <td>{person.cicDesc}</td>
              
              <td>
                <button>Del</button>
                <button> Editar </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
