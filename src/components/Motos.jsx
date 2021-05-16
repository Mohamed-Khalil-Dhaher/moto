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
// <div>
//   {/* <div id="wrap">
//     <form action="" autocomplete="on">
//       <input
//         id="search"
//         name="search"
//         type="text"
//         placeholder="What're we looking for ?"

//       />
//       <input id="search_submit" value="Rechercher" type="submit" />
//     </form>
//   </div><br></br> */}

// </div>

export default Motos;
// type: "",
// model: "",
// image: "",
// description: "",
// price: "",
// contactInformation: "",
// this.changeType = this.changeType.bind(this);
// this.changeModel = this.changeModel.bind(this);
// this.changeImage = this.changeImage.bind(this);
// this.changeDescription = this.changeDescription.bind(this);
// this.changePrice = this.changePrice.bind(this);
// this.changeContactInformation = this.changeContactInformation.bind(this);
// this.onSubmit = this.onSubmit.bind(this);
// changeType(event) {
//   this.setState({ type: event.target.value });
// }
// changeModel(event) {
//   this.setState({ model: event.target.value });
// }
// changeImage(event) {
//   this.setState({ image: event.target.value });
// }
// changeDescription(event) {
//   this.setState({ description: event.target.value });
// }
// changePrice(event) {
//   this.setState({ price: event.target.value });
// }
// changeContactInformation(event) {
//   this.setState({ contactInformation: event.target.value });
// }
// onSubmit(event) {
//   event.preventDefault();
//   const register = {
//     type: this.state.type,
//     model: this.state.model,
//     image: this.state.image,
//     description: this.state.description,
//     price: this.state.price,
//     contactInformation: this.state.contactInformation,
//   };
//   axios
//     .post("http://localhost:8000/api/motos", register)
//     .then((response) => console.log(response.data));

//   this.setState({
//     type: "",
//     model: "",
//     image: "",
//     description: "",
//     price: "",
//     contactInformation: "",
//   });
//   // if (!type || !model || !image || !description || !price ||!contactInformation) {
//   //   return alert("Please fill all the information");
//   // }
// }
// <div>
//   <Motos motos={this.state.motos} />
// </div>
//     <div class="container">
// <form>
// 	<div class="field" tabindex="1">
// 		<label for="username">
// 			<i class="far fa-user"></i>Your Name
// 		</label>
// 		<input name="username" type="text" placeholder="e.g. john doe" required>
// 	</div>
// 	<div class="field" tabindex="2">
// 		<label for="email">
// 			<i class="far fa-envelope"></i>Your Email
// 		</label>
// 		<input name="email" type="text" placeholder="email@domain.com" required>
// 	</div>
// 	<div class="field" tabindex="3">
// 		<label for="message">
// 			<i class="far fa-edit"></i>Your Message
// 		</label>
// 		<textarea name="message" placeholder="type here" required></textarea>
// 	</div>
// 	<button type="reset">Send Me Message</button>
// 	<div class="social-media">
// 		<span>
// 			Get In Touch<i class="fas fa-long-arrow-alt-right"></i>
// 		</span>
// 		<a class="fab fa-facebook-f" href="https://facebook.com/uzcho" target="blank_"></a>
// 		<a class="fab fa-twitter" href="https://twitter.com/uzcho_" target="blank_"></a>
// 		<a class="fab fa-instagram" href="https://www.instagram.com/uzcho_" target="blank_"></a>
// 		<a class="fab fa-codepen" href="https://codepen.io/uzcho_" target="blank_"></a>
// 	</div>
// </form>
//</div>
