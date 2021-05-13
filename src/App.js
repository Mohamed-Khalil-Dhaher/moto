import React from "react";
import axios from "axios";
import "./App.css";
//import Motos from "./components/Motos";
import Motos from "./components/Motos";
import MotoDetails from "./components/MotoDetails";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      motos: [],
      images: [],
    };
    this.fetchMotos = this.fetchMotos.bind(this);
  }
  componentDidMount() {
    this.fetchMotos();
  }

  fetchMotos() {
    axios.get("http://localhost:8000/api/motos").then(({ data }) => {
      this.setState({
        motos: data,
      });
    });
  }

  getAllMotoImgs(id) {
    axios.get(`http://localhost:8000/api/images/${id}`).then(({ data }) => {
      this.setState({
        images: data,
      });
      axios.get(`http://localhost:8000/api/motos/${id}`).then(({ data }) => {
        this.setState({
          motoDetails: data,
        });
        this.props.changeView("motodetails");
      });
    });
  }
  render() {
    return (
      <div>
        <Motos motos={this.state.motos} getImages={this.getAllHomeImgs}/>
      </div>
    );
  }
}

export default App;
