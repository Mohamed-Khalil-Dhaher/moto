import React from "react";
import MotoDetails from "./MotoDetails";
//import Search from "./Search";
class Motos extends React.Component {
  constructor() {
    super();
    this.state = {
      moto: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeMoto = this.changeMoto.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    var newMoto;
    for (var i = 0; i < this.props.motos.length; i++) {
      if (this.props.motos[i].type === this.state.moto) {
        newMoto = this.props.motos[i];
        console.log(newMoto);
      }
    }
    this.state.moto = newMoto;
    this.setState({
      moto: newMoto,
    });
    //this.props.changeView("search");
  }
  changeMoto(event) {
    // console.log(this.state.moto);
    this.setState({
      moto: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <div id="wrap">
          <form action="" autocomplete="on">
            <input
              id="search"
              name="search"
              type="text"
              placeholder="What're we looking for ?"
              onChange={this.changeMoto}
              value={this.state.moto}
            />
            <input
              id="search_submit"
              value="Rechercher"
              type="submit"
              onClick={this.handleClick}
            />
          </form>
        </div>
        <br></br>
        <div>
          {/* <div>
            <h4>type:{this.state.moto.type}</h4>
            <h4>description:{this.state.moto.description}</h4>
          </div> */}
          <div>
            <body>
              <div class="wrapper">
                <div class="product-img">
                  <img src={this.state.moto.image} height="420" width="600" />
                </div>
                <div class="product-info">
                  <div class="product-text">
                    <h1>{this.state.moto.type}</h1>
                    <h2>Model :{this.state.moto.model}</h2>
                    <h2>Contact :{this.state.moto.contactInformation}</h2>
                    <p>
                      {this.state.moto.description}
                      <br></br>
                    </p>
                  </div>
                  <div class="product-price-btn">
                    <span>{this.state.moto.price}</span>DT<br></br>
                    <button type="button">buy now</button>
                  </div>
                </div>
              </div>
            </body>
          </div>
          {this.props.motos.map((moto) => {
            return <MotoDetails moto={moto} />;
          })}
        </div>
      </div>
    );
  }
}

export default Motos;