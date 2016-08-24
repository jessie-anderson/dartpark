import React, { Component } from 'react';
import CardItemEdit from './carditem-edit';
import { connect } from 'react-redux';
import VehicleItemRender from './vehicle-render';
import { changeRenterBio } from '../../actions/user-actions';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      description: '',
    };
    this.onChangeFirst = this.onChangeFirst.bind(this);
    this.onChangeLast = this.onChangeLast.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onChangeFirst(event) {
    this.setState({ firstname: event.target.value });
  }

  onChangeLast(event) {
    this.setState({ lastname: event.target.value });
  }

  onChangeAddress(event) {
    this.setState({ address: event.target.value });
  }

  onChangeDescription(event) {
    this.setState({ description: event.target.value });
  }
  onButtonPress(event) {
    this.props.changeRenterBio(this.state);
  }

  render() {
    return (
      <div>
        <div className="Profile">
          <div className="prof-header">
            <h3>Profile</h3>
          </div>
          <div className="inputs">
            <input value={this.state.firstname} onChange={this.onChangeFirst} placeholder="First Name" />
          </div>
          <div className="inputs">
            <input value={this.state.lastname} onChange={this.onChangeLast} placeholder="Last Name" />
          </div>
          <div className="inputs">
            <input value={this.state.address} onChange={this.onChangeAddress} placeholder="Address" />
          </div>
          <div className="inputs">
            <input value={this.state.description} onChange={this.onChangeDescription} placeholder="Add a description!" />
          </div>
          <div className="button">
            <button id="edit-info">Edit My Info</button>
            <button id="save-info" onClick={this.onButtonPress}>Save Changes</button>
          </div>
          <CardItemEdit />
          <VehicleItemRender />
        </div>
      </div>
    );
  }
}

export default connect(null, { changeRenterBio })(Profile);
