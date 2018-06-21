import React, { Component } from 'react';
import ProcessList from './components/ProcessList';
import {createProcess, fetchProcesses} from './api';
import AddProcess from './components/AddProcess';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      processes: [],
      addForm: {
        showAddForm: false,
        name: '',
      }
    }
  }

  async populateProcessList() {
    try {
      const {data: processes} = await fetchProcesses();

      this.setState({
        processes,
      })
    } catch (e) {
      console.error(e);
    }
  }

  async componentDidMount() {
    await this.populateProcessList();
  }

  handleShowAddForm() {
    this.setState({
      addForm: {
        ...this.state.addForm,
        showAddForm: true,
      }
    })
  }

  changeNewProcessName(name) {
    this.setState({
      addForm: {
        ...this.state.addForm,
        name,
      }
    })
  }

  async handleAddProcess() {
    try {
      const {data: process} = await createProcess(this.state.addForm.name);
      this.setState({
        addForm: {
          showAddForm: false,
          name: '',
        }
      });
      await this.populateProcessList();
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <AddProcess
          {...this.state.addForm}
          handleShowAddForm={this.handleShowAddForm.bind(this)}
          changeNewProcessName={this.changeNewProcessName.bind(this)}
          handleAddProcess={this.handleAddProcess.bind(this)}
        />
        <ProcessList
          processes={this.state.processes}
        />
      </div>
    );
  }
}

export default App;
