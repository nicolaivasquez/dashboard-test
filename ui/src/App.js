import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <button>Add Process</button>
        <div>
          <h3>Active Processes</h3>
          <div>
            <div>Process 1</div>
            <button>Remove</button>
            <button>Edit</button>
            <button>Reset</button>
            <div>Visualisation here</div>
          </div>
          <div>
            <div>Process 2</div>
            <button>Remove</button>
            <button>Edit</button>
            <button>Reset</button>
            <div>Visualisation here</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
