// import React, { Component } from 'react';
// import { connect } from 'react-redux';
//
// class CardItemRender extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { nameOnCard: '', cardNum: '' };
//     this.handleRender = this.handleRender.bind(this);
//   }
//
//   handleRender() {
//     this.setState({ nameOnCard: this.props.nameOnCard, cardNum: this.props.cardNum });
//   }
//
//   render() {
//     return (
//       <div className="newPost">
//         <div className="heading">
//           <span>Choose Payment Type</span>
//         </div>
//         <div className="inputs">
//           {this.handleRender}
//           <h3>Name on Card:{this.state.nameOnCard}</h3>
//           <h3>Card Number:{this.state.cardNum}</h3>
//           <button>Choose this card</button>
//         </div>
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = (state) => (
//   {
//     nameOnCard: state.nameOnCard,
//     cardNum: state.cardNum,
//
//   }
// );
//
// export default connect(mapStateToProps, null)(CardItemRender);
