import React from "react";

export default class PersonList extends React.Component {
  state = { persons: [] };

  componentDidMount() {
    fetch("https://flaskEdson.matheusgamarra.repl.co/perguntas")
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
            <th>pgtID</th>
            <th>pgtDes</th>
            <th>pgtRes</th>
            <th>pgtAltFls1</th>
            <th>pgtAltFls2</th>
            <th>pgtAltFls3</th>
            <th>pgtTipo</th>
            <th>pgtDif</th>
          </tr>
        </thead>
        <tbody>
          {this.state.persons.map((person) => (
            <tr key={person.pgtID}>
              <td>{person.pgtID}</td>
              <td>{person.pgtDes}</td>
              <td>{person.pgtRes}</td>
              <td>{person.pgtAltFls1}</td>
              <td>{person.pgtAltFls2}</td>
              <td>{person.pgtAltFls3}</td>
              <td>{person.pgtTipo}</td>
              <td>{person.pgtDif}</td>
              
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
