import React from "react";
import axios from "axios";
import "./App.css";
//import Motos from "./components/Motos";
import Motos from "./components/Motos";
import MotoDetails from "./components/MotoDetails";
import PostMoto from "./components/PostMoto";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "motos",
      motos: [],
      images: [],
    };
    this.fetchMotos = this.fetchMotos.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }
  toggleView(view) {
    this.setState({
      currentView: view,
    });
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
        <section class="stage">
          <div id="home" class="div">
            <p id="homep" class="p" onClick={() => this.toggleView("motos")}>
              All Motos
            </p>
          </div>
          <div class="div" id="about">
            <p class="p" onClick={() => this.toggleView("add")}>
              Add Moto
            </p>
          </div>
          {/* <div class="div" id="contact"><p class="p">Gallery</p>
  </div>
  <div class="div" id="gallery"><p class="p">Contact</p>
  </div> */}
        </section>
        <br></br>
        <div>
          {this.state.currentView === "motos" ? (
            <Motos motos={this.state.motos} getImages={this.getAllHomeImgs} />
          ) : (
            <PostMoto />
          )}
        </div>
      </div>
    );
  }
}

export default App;
