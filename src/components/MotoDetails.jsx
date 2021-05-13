import React from "react";
// import "../App.css";
var MotoDetails = (props) => (
  <body>
    <div class="wrapper">
      <div class="product-img">
        <img src={props.moto.image}
        onClick={() => props.getImages(props.moto._id)}
         height="420" width="600" />
      </div>
      <div class="product-info">
        <div class="product-text">
          <h1>{props.moto.type}</h1>
          <h2>Model :{props.moto.model}</h2>
          <p>
            {props.moto.description}
            <br></br>
          </p>
        </div>
        <div class="product-price-btn">
          <span>{props.moto.price}</span>DT<br></br>
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  </body>
);

export default MotoDetails;
