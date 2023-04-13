import React from "react";

export default class PersonList extends React.Component {
  state = { persons: [] };

  componentDidMount() {
    fetch("https://flaskEdson.matheusgamarra.repl.co/grupos")
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
            <th>grpID</th>
            <th>grpDesc</th>
            <th>cicID</th>
          </tr>
        </thead>
        <tbody>
          {this.state.persons.map((person) => (
            <tr key={person.grpID}>
              <td>{person.grpID}</td>
              <td>{person.grpDesc}</td>
              <td>{person.cicID}</td>
              
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
