import React, {Component} from 'react';
// import axios from 'axios';
import "./Smurf.css";

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: ""
    }
  }

  // componentDidMount() {
  //   console.log("id:" , this.props.match.params.id)
  //   const id = this.props.match.params.id
  //   this.fetchSmurf(id)
  // }

  // fetchSmurf = id => {
  //   axios
  //     .get(`http://localhost:3333/smurfs/${id}`)
  //     .then(response => {
  //       this.setState({smurf: response.data})
  //     })
  //     .catch(err => console.log(err))
  // }
  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
      </div>
    );
  };
}



Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

