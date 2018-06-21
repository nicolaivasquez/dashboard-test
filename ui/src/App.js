import React, { Component } from 'react';
import ProcessList from './components/ProcessList';
import {changeProcessName, createProcess, fetchProcesses, removeProcess} from './api';
import AddProcess from './components/AddProcess';

import {createMuiTheme, withTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757de8',
      main: '#3f51b5',
      dark: '#002984',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#9be7ff',
      main: '#64b5f6',
      dark: '#2286c3',
      contrastText: '#f1f8e9'
    }
  }
})

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
      await createProcess(this.state.addForm.name);
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
      <Grid>
        <Typography variant='headline'>Dashboard</Typography>
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
      </Grid>
    );
  }
}

export default withTheme(theme)(App);
