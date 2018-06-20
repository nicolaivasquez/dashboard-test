import React, { Component } from 'react';
import ProcessList from './components/ProcessList';
import {fetchProcesses} from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      processes: [],
    }
  }

  async componentDidMount() {
    try {
      const {data: processes} = await fetchProcesses();

      this.setState({
        processes,
      })
    } catch (e) {
      console.error(e);
    }
  }

  handleAddProcess() {
    console.log('Adding Process');
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <button onClick={this.handleAddProcess.bind(this)}>Add Process</button>
        <ProcessList
          processes={this.state.processes}
        />
      </div>
    );
  }
}

export default App;
