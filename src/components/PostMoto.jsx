import React from "react";
import axios from "axios";

class PostMoto extends React.Component {
  constructor() {
    super();
    this.state = {
      type: "",
      model: "",
      image: "",
      description: "",
      price: "",
      contactInformation: "",
    };
    this.changeType = this.changeType.bind(this);
    this.changeModel = this.changeModel.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.changeContactInformation = this.changeContactInformation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeType(event) {
    this.setState({ type: event.target.value });
    //console.log(this.state.type);
  }
  changeModel(event) {
    this.setState({ model: event.target.value });
  }
  changeImage(event) {
    this.setState({ image: event.target.value });
  }
  changeDescription(event) {
    this.setState({ description: event.target.value });
  }
  changePrice(event) {
    this.setState({ price: event.target.value });
  }
  changeContactInformation(event) {
    this.setState({ contactInformation: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    const register = {
      type: this.state.type,
      model: this.state.model,
      image: this.state.image,
      description: this.state.description,
      price: this.state.price,
      contactInformation: this.state.contactInformation,
    };
    axios
      .post("http://localhost:8000/api/motos", register)
      .then((response) => console.log(response.data));

    this.setState({
      type: "",
      model: "",
      image: "",
      description: "",
      price: "",
      contactInformation: "",
    });
  }
  render() {
    return (
      <div class="container contact-form">
        <div class="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form method="post">
          <h3>Add Your New Product</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="txtName"
                  class="form-control"
                  placeholder="Type *"
                  value={this.state.type}
                  onChange={this.changeType}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  class="form-control"
                  placeholder="Model *"
                  value={this.state.model}
                  onChange={this.changeModel}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  class="form-control"
                  placeholder="Your Contact Information *"
                  value={this.state.contactInformation}
                  onChange={this.changeContactInformation}
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  class="btnContact"
                  value="Post Your Motocycle"
                  onClick={this.onSubmit}
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  name="txtMsg"
                  class="form-control"
                  placeholder="Your Description *"
                  value={this.state.description}
                  onChange={this.changeDescription}
                ></textarea>
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtEmail"
                class="form-control"
                placeholder="Price *"
                value={this.state.price}
                onChange={this.changePrice}
              />
            </div>
            <div class="form-group">
              <div class="custom-file mt-3 mb-3">
                <input
                  id="fileInput"
                  type="file"
                  value={this.state.image}
                  onChange={this.changeImage}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PostMoto;
{
  /* <div class="custom-file mt-3 mb-3">
        <input id="fileInput" type="file" />
        <input
          type="button"
          class="btn btn-primary btn-block mx-auto"
          value="UPLOAD PRODUCT IMAGE"
          onclick="document.getElementById('fileInput').click();"
        />
      </div> */
}
