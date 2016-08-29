import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import { fetchConvoPreview, fetchConvo, sendMessage } from '../../actions/message-actions';
import io from 'socket.io-client';
import { Button, FormControl, Form } from 'react-bootstrap';

const socketserver = 'http://dartpark.herokuapp.com/';

// TODO: Make chat scroll to bottom when message is sent

class MessagePage extends Component {
  constructor(props) {
    super(props);

    this.socket = io(socketserver);

    // init component state here
    this.state = {
      currentMessage: '',
      currentConvoId: '',
      userType: this.props.userType,
    };

    this.handleConvoClick = this.handleConvoClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onIncomingMessage = this.onIncomingMessage.bind(this);

    this.socket.on('connect', () => { console.log('socket.io connected'); });
    this.socket.on('disconnect', () => { console.log('socket.io disconnected'); });
    this.socket.on('reconnect', () => { console.log('socket.io reconnected'); });
    this.socket.on('error', (error) => { console.log(error); });
    this.socket.on('incomingMessage', this.onIncomingMessage);
  }
  componentWillMount() {
    this.props.fetchConvoPreview(this.state.userType);
  }
  onIncomingMessage(involvedParties) {
    const userId = this.state.userType === 'renter' ? this.props.conversation.renter : this.props.conversation.vendor;
    const socketUserId = this.state.userType === 'renter' ? involvedParties.renterId : involvedParties.vendorId;

    if (userId === socketUserId) {
      this.props.fetchConvoPreview(this.state.userType);
      this.props.fetchConvo(involvedParties.conversationId);
    }
  }
  handleConvoClick(convoId) {
    this.props.fetchConvo(convoId);
    this.setState({ currentConvoId: convoId });
  }
  handleInputChange(event) {
    this.setState({ currentMessage: event.target.value });
  }
  handleSendMessage() {
    this.props.sendMessage(this.state.currentConvoId, { message: this.state.currentMessage });
    this.socket.emit('sendMessage', this.props.conversation);
    this.scrollDown();
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ currentMessage: ' ' });
  }
  renderFullConversation() {
    if (this.props.conversation) {
      return this.props.conversation.messages.map((message) => {
        if (message.sender === this.state.userType) { // this is you
          return (
            <div key={message._id} id="right-msg">
              <div id="your-msg">
                <div>{message.text}</div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={message._id} id="left-msg">
              <div id="others-msg">
                <div>{message.text}</div>
              </div>
            </div>
            );
        }
      });
    } else {
      return <div>Select a conversation to view messages</div>;
    }
  }

  renderConversationPreview() {
    if (this.props.conversations) {
      return this.props.conversations.map((convo) => {
        if (convo.id === this.state.currentConvoId) {
          return (
            <div id="convo-preview-active" key={convo.id} onClick={(event) => { this.handleConvoClick(convo.id); }}>
              <div id="chat-with">Convo with: {this.state.userType === 'renter' ? convo.usernameVendor : convo.usernameRenter}</div>
              <div id="preview-msg">Message: {convo.messages[0].text}</div>
            </div>
          );
        } else {
          return (
            <div id="convo-preview" key={convo.id} onClick={(event) => { this.handleConvoClick(convo.id); }}>
              <div id="chat-with">Convo with: {this.state.userType === 'renter' ? convo.usernameVendor : convo.usernameRenter}</div>
              <div id="preview-msg">Message: {convo.messages[0].text}</div>
            </div>
          );
        }
      });
    } else {
      return <div>No conversations</div>;
    }
  }

  render() {
    return (
      <div>
        <div>

        </div>
        <div id="messages">
          <div id="conv-prev">
            <h3>Chats</h3>
            {this.renderConversationPreview()}
          </div>
          <div id="full-conv">
            <h3>Full Conversation</h3>
            <div id="conv-display">
              {this.renderFullConversation()}
            </div>
            <div id="message-bar">
              <Form inline onSubmit={this.handleSubmit}>
                <FormControl id="msg-input" onChange={this.handleInputChange} value={this.state.currentMessage} type="text" placeholder="Your message..." />
                <Button id="send-btn" type="submit" onClick={this.handleSendMessage} disabled={!this.props.conversation}>Send</Button>
              </Form>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    conversations: state.conversations.all,
    conversation: state.conversations.conversation,
    userType: typeof localStorage.getItem('userRole') !== 'undefined' ? localStorage.getItem('userRole') : state.auth.userType,
  }
);

export default connect(mapStateToProps, { fetchConvoPreview, fetchConvo, sendMessage })(MessagePage);
