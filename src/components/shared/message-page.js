import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import NavBar from '../vendor/navbar';
import { fetchConvoPreview, fetchConvo, sendMessage } from '../../actions/message-actions';

class MessagePage extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { currentMessage: '', currentConvoId: '', role: 'renter' };
    this.handleConvoClick = this.handleConvoClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }
  componentWillMount() {
    this.props.fetchConvoPreview('57bb6f7cb459b705d81296b5', 'renter');
    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1N2JiNmY3Y2I0NTliNzA1ZDgxMjk2YjUiLCJpYXQiOjE0NzE5MDE1NjQ2MjB9.i9AcFPjRvjxOLVtSdmJtSkHGBbAcfwK65EPRo8kXaFM');
  }
  handleConvoClick(convoId) {
    this.props.fetchConvo(convoId);
    this.setState({ currentConvoId: convoId });
  }
  handleInputChange(event) {
    this.setState({ currentMessage: event.target.value });
  }
  handleSendMessage() {
    this.props.sendMessage(this.state.currentConvoId, { message: this.state.currentMessage, sender: this.state.role });
  }
  renderFullConversation() {
    console.log(this.props.conversation);
    if (this.props.conversation) {
      return this.props.conversation.messages.map((message) => {
        console.log(message);
        if (message.sender === this.state.role) { // this is you
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
              <div id="chat-with">Convo with: {convo.usernameRenter}</div>
              <div id="preview-msg">Message: {convo.messages[0].text}</div>
            </div>
          );
        } else {
          return (
            <div id="convo-preview" key={convo.id} onClick={(event) => { this.handleConvoClick(convo.id); }}>
              <div id="chat-with">Convo with: {convo.usernameRenter}</div>
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
        <NavBar />
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
            <div>
              <input placeholder="Message..." onChange={this.handleInputChange} id="msg-input" />
              <button onClick={this.handleSendMessage} disabled={!this.props.conversation} id="send-btn">Send</button>
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
  }
);

// const checkStateToProps = (state) => {
//   console.log(state);
// };


export default connect(mapStateToProps, { fetchConvoPreview, fetchConvo, sendMessage })(MessagePage);
