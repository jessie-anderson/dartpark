import React, { Component } from 'react';

// dumb component
class CardItemEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOnCard: '',
      cardNum: '',
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
        <div className="inputs">
          <input value={this.state.nameOnCard} onChange={this.onChangeCardName} placeholder="Name on Card" />
        </div>
        <div className="inputs">
          <input value={this.state.cardNum} onChange={this.onChangeCardNum} placeholder="Card Number" />
        </div>
        <button>Edit Card Info</button>
      </div>
    );
  }
}

export default CardItemEdit;
