import React from "react";
import axios from "axios";
import "./App.css";
//import Motos from "./components/Motos";
import Motos from "./components/Motos";
//import MotoDetails from "./components/MotoDetails";
import PostMoto from "./components/PostMoto";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "motos",
      motos: [],
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
  // handleClick(event) {
  //   event.preventDefault();
  //  var newMoto;
  //  for(var i=0; i<this.state.motos.length; i++) {
  //    if(this.state.motos[i].type === this.state.moto) {
  //      newMoto = this.state.motos[i];
  //    }
  //  }
  //  this.state.moto = newMoto;
  //  this.setState({
  //    moto: newMoto
  //  })
  // }
  // changeMoto(event) {
  // this.setState({
  //   moto: event.target.value
  // })
  // }
  //deleteMoto() {}

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
            <Motos motos={this.state.motos} changeView={this.toggleView}/>
          ) : (
            <PostMoto changeView={this.toggleView} />
          )}
        </div>
      </div>
    );
  }
}
// getImages={this.getAllMotoImgs}
export default App;
