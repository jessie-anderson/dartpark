import React, { Component } from 'react';
// import { Link } from 'react-router';
import MessageBar from './message-bar';

// class based component (smart component)
const messageData = [
    { chatWith: 'Billy', sender: 'Bob',
    messages: [
      { message: 'Hi, how are you?', sender: 'true', time: '2:05pm' },
      { message: 'Hi! I am good', sender: 'false', time: '3:34pm' },
      { message: 'I am good as well', sender: 'true', time: '7:00pm' },
    ],
     },
    { chatWith: 'Ally', sender: 'Bob', messages: [
      { message: 'Hi', sender: 'false', time: '2:05pm' },
      { message: 'Hi', sender: 'true', time: '2:05pm' },
      { message: 'Are the lights on for my car?', sender: 'false', time: '3:34pm' },
      { message: 'Nope just checked and they are not!', sender: 'true', time: '7:00pm' },
    ] },
];

const MessageDetail = (props) => {
  return (
    <div>
      <p> Sender: {props.user}</p>
      <p> Message: {props.message}</p>
      <p> Time sent: {props.time}</p>
    </div>
  );
};

const ChatPreview = (props) => {
  return (
    <div>
      <p> Chat with: {props.user} </p>
      <p> message: {props.message}</p>
      <p> time sent: {props.time}</p>
    </div>
  );
};

class MessagePage extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    const messages = messageData.messages((message) => {
      return (
        <div></div>
      );
    });
    const sentMessages = messageData.map((data) => {
      return (
        <MessageDetail
          user={data.user}
          message={data.messages.message}
          time={data.messages.time}
          key={data.messages}
        />
      );
    });

    // const messagePreviewLength = 5;
    const chats = messageData.map((data) => {
      return (
        <ChatPreview
          user={data.chatWith}
          time={data.time}
          message={data.message}
          key={data.message}
        />
      );
    });

    return (
      <div>
        <h1>Messages</h1>
        <h3>Left Side Bar (Message Preview)</h3>
        {chats}
        <h3>Current Chat Messages</h3>
        // {sentMessages}
        <MessageBar />
      </div>

    );
  }
}

export default MessagePage;
