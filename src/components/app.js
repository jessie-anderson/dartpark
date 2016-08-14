import React, { Component } from 'react';

import SignIn from './shared/signin';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export default App;
