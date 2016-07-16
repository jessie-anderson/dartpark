import React, { Component } from 'react';

import Welcome from './welcome';

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
        <Welcome />
      </div>
    );
  }
}

export default App;
