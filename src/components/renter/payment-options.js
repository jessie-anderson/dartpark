import React, { Component } from 'react';

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOnCard: 'name on card',
      cardNum: 'xxxx-xxxx-xxxx-1234',
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
      <div className="newPost">
        <div className="heading">
          <span>Profile</span>
        </div>
        <div className="inputs">
          <input value={this.state.nameOnCard} onChange={this.onChangeCardName} placeholder="Phil Hanlon" />
        </div>
        <div className="inputs">
          <input value={this.state.cardNum} onChange={this.onChangeCardNum} placeholder="XXXX-XXXX-XXXX-1769" />
        </div>
        <div className="button">
          <button id="edit-info">Edit Payment Info</button>
        </div>
      </div>
    );
  }
}

export default CardItem;
