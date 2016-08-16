import React, { Component } from 'react';


// function based "dumb" component with no state
// const CardItem = (props) => {
//   return (
//     <div>
//       <p> Name: {this.cardName}</p>
//       <p> Number: {this.cardNum}</p>
//     </div>
//   );
// };

// export default CardItem;


// dumb component
class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
    this.onChangeCardName = this.onChangeCardName.bind(this);
    this.onChangeCardNum = this.onChangeCardNum.bind(this);
  }

  onChangeCardName(event) {
    this.setState({ nameOnCard: event.target.value });
  }

  onChangeCardNum(event) {
    this.setState({ cardNum: event.target.value });
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default CardItem;
