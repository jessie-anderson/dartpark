import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
// import MessageBar from './message-bar';
import NavBar from '../vendor/navbar';
import { fetchConvoPreview, fetchConvo } from '../../actions/message-actions';

class MessagePage extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    this.handleConvoClick = this.handleConvoClick.bind(this);
  }
  componentWillMount() {
    this.props.fetchConvoPreview('57bb6f7cb459b705d81296b5', 'renter');
    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1N2JiNmY3Y2I0NTliNzA1ZDgxMjk2YjUiLCJpYXQiOjE0NzE5MDE1NjQ2MjB9.i9AcFPjRvjxOLVtSdmJtSkHGBbAcfwK65EPRo8kXaFM');
  }
  handleConvoClick(convoId) {
    console.log();
    this.props.fetchConvo(convoId);
  }
  renderFullConversation() {
    console.log(this.props.conversation);
    if (this.props.conversation) {
      return this.props.conversation.messages.map((message) => {
        console.log(message);
        return (
          <div>
            {message.text}
          </div>
          );
      });
    } else {
      return <div>No messages</div>;
    }
  }
  renderConversationPreview() {
    if (this.props.conversations) {
      return this.props.conversations.map((convo) => {
        return (
          <div id="convo-preview" key={convo.id} onClick={(event) => { this.handleConvoClick(convo.id); }}>
            <p>Id: {convo.id}</p>
            <p>Convo with: {convo.usernameRenter}</p>
            <p>Message: {convo.messages[0].text}</p>
          </div>
        );
      });
    } else {
      return <div>No conversations</div>;
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <h1>Messages</h1>
        <h3>Conversations</h3>
        {this.renderConversationPreview()}
        <h3>Full Conversation</h3>
        {this.renderFullConversation()}
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


export default connect(mapStateToProps, { fetchConvoPreview, fetchConvo })(MessagePage);
