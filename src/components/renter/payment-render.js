import React, { Component } from 'react';
// import CardItem from './card-item';

const cardData = [
  { cardName: 'Bob', cardNum: 'xxxx-xxxx-xxxx-1234' },
  { cardName: 'Billy', cardNum: 'xxxx-xxxx-xxxx-4321' },
];

const CardItem = (props) => {
  return (
    <div>
      <p> Name: {props.name}</p>
      <p> Number: {props.num}</p>
    </div>
  );
};

class CardItemRender extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const users = cardData.map((card) => {
      return (
        <CardItem name={card.cardName} num={card.cardNum} key={card.cardNum} />
      );
    });
    return (
      <div className="newPost">
        <div className="heading">
          <span>Choose Payment Type</span>
        </div>
        {users}
      </div>
    );
  }
}

export default CardItemRender;
