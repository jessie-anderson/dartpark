import React, { Component } from 'react';

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
        {/* NavBars will go here, depending on authentication*/}
        <div>
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
