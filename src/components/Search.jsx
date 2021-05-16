// import React from 'react';

// class Search extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       moto : ""
//     }
//     this.handleClick = this.handleClick.bind(this);
//     this.changeMoto = this.changeMoto.bind(this);
//   }
// handleClick(event) {
//   event.preventDefault();
//  var newMoto;
//  for(var i=0; i<props.motos.length; i++) {
//    if(props.motos[i].type === this.state.moto) {
//      newMoto = props.motos[i];
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
//   render() {
//     return(
//       <div id="wrap">
//       <form action="" autocomplete="on">
//         <input
//           id="search"
//           name="search"
//           type="text"
//           placeholder="What're we looking for ?"
//           value={this.state.moto}
//           onChange={this.changeMoto}
//         />
//         <input id="search_submit" value="Rechercher" type="submit" onClick={this.handleClick}/>
//       </form>
//     </div>
//     )
//   }
// }

// export default Search;