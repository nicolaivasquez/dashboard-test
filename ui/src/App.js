import React, { Component } from 'react';
import ProcessList from './components/ProcessList';
import {changeProcessName, createProcess, fetchProcesses, removeProcess} from './api';
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
      const {data} = await fetchProcesses();
      const processes = data.map((process) => ({
        ...process,
        editable: false,
      }));

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

  async handleRemoveProcess(id) {
    try {
      await removeProcess(id);
      await this.populateProcessList();
    } catch (e) {
      console.error(e);
    }
  }

  handleChangeName(id, name) {
    this.setState({
      processes: this.state.processes.map((process) => {
        if (process.id !== id) {
          return process;
        }
        return {
          ...process,
          name,
        }
      })
    })
  }

  async handleChangeProcessName(id) {
    try {
      const process = this.state.processes.find((process) => process.id === id);
      await changeProcessName(id, process.name);
      await this.populateProcessList();
    } catch (e) {
      console.error(e);
    }
  }

  toggleEditing(id) {
    console.log('ToggleEditing', id)
    this.setState({
      processes: this.state.processes.map((process) => {
        if (process.id === id) {
          return {
            ...process,
            editable: true,
          }
        }
        return process;
      })
    })
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
          handleRemoveProcess={this.handleRemoveProcess.bind(this)}
          handleChangeName={this.handleChangeName.bind(this)}
          handleChangeProcessName={this.handleChangeProcessName.bind(this)}
          toggleEditing={this.toggleEditing.bind(this)}
        />
      </div>
    );
  }
}

export default App;
