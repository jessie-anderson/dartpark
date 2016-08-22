import React, { Component } from 'react';
// import { Link } from 'react-router';
import MessageBar from './message-bar';
import NavBar from '../vendor/navbar';

// class based component (smart component)
const messageList = [
  { message: 'Hi, how are you?', sender: 'true', time: '2:05pm' },
  { message: 'Hi! I am good', sender: 'false', time: '3:34pm' },
  { message: 'I am good as well', sender: 'true', time: '7:00pm' },
];

const messageList1 = [
  { message: 'Hi', sender: 'false', time: '2:05pm' },
  { message: 'Hi', sender: 'true', time: '2:05pm' },
  { message: 'Are the lights on for my car?', sender: 'false', time: '3:34pm' },
  { message: 'Nope just checked and they are not!', sender: 'true', time: '7:00pm' },
];

const messageData = [
    { chatWith: 'Billy', sender: 'Bob', messages: messageList,
     },
    { chatWith: 'Ally', sender: 'Bob', messages: messageList1 },
];

const MessageDetail = (props) => {
  return (
    <div>
      <div> Sender: {props.sender}</div>
      <div> Message: {props.message}</div>
      <div> Time sent: {props.time}</div>
    </div>
  );
};

const ChatPreview = (props) => {
  return (
    <div>
      <div>
        Chat with: {props.user}
      </div>
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
    const sentMessages = messageData.map((data) => {
      return (
        <MessageDetail
          user={data.user}
          message={data.messages.map((message) => {
            return (
              <div>
                {message.message}
                <div>Time sent: {message.time}</div>
              </div>
            );
          })}
          time={data.messages.time}
          key={data.messages.time}
        />
      );
    });

    // const messagePreviewLength = 5;
    const chats = messageData.map((data) => {
      return (
        <ChatPreview
          user={data.chatWith}
          key={data.chatWith}
        />
      );
    });

    return (
      <div>
        <NavBar />
        <h1>Messages</h1>
        <h3>Left Side Bar (Message Preview)</h3>
        {chats}
        <h3>Current Chat Messages</h3>
        {sentMessages}
        <MessageBar />
      </div>

    );
  }
}

export default MessagePage;
