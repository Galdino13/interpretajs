import React from "react";

export default class PersonList extends React.Component {
  state = { persons: [] };

  componentDidMount() {
    fetch("https://flaskEdson.matheusgamarra.repl.co/palavras")
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
            <th>plvID</th>
            <th>Nome</th>
            <th>Classe</th>
            <th>dicID</th>
            <th>Significado</th>
          </tr>
        </thead>
        <tbody>
          {this.state.persons.map((person) => (
            <tr key={person.plvID}>
              <td>{person.plvID}</td>
              <td>{person.plvNome}</td>
              <td>{person.plvClasse}</td>
              <td>{person.dicID}</td>
              <td>{person.plvSgn}</td>
              
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
