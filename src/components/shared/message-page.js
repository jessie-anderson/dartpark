import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import MessageBar from './message-bar';
import NavBar from '../vendor/navbar';
import { fetchConvos } from '../../actions/message-actions';


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
  componentWillMount() {
    this.props.fetchConvos('57bb6f7cb459b705d81296b5', 'renter');
    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1N2JiNmY3Y2I0NTliNzA1ZDgxMjk2YjUiLCJpYXQiOjE0NzE5MDE1NjQ2MjB9.i9AcFPjRvjxOLVtSdmJtSkHGBbAcfwK65EPRo8kXaFM');
  }
  renderConversations() {
    if (this.props.conversations) {
      return this.props.conversations.map((convo) => {
        return (
          <div id="convo-preview">
            <p>Id: {convo.id}</p>
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
        {this.renderConversations()}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    conversations: state.conversations,
    conversation:
  }
);

// const checkStateToProps = (state) => {
//   console.log(state);
// };


export default connect(mapStateToProps, { fetchConvos })(MessagePage);
