import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const AddProcess = (props) => {
  return (
    <div>
    {props.showAddForm ||
      <Button variant='outlined' name='toggleAddProcess' onClick={props.handleShowAddForm}>Add Process</Button>
    }
    {props.showAddForm &&
      <form name='addForm' onSubmit={(e) => e.preventDefault()}>
        <Card>
          <CardContent>
            <TextField label='Name' onChange={(e) => props.changeNewProcessName(e.target.value)} />
          </CardContent>
          <CardActions>
            <Button onClick={props.handleAddProcess}>Create Process</Button>
          </CardActions>
        </Card>
      </form>
    }
    </div>
  );
}

AddProcess.propTypes = {
  showAddForm: PropTypes.bool,
  handleShowAddForm: PropTypes.func,
  changeNewProcessName: PropTypes.func,
  handleAddProcess: PropTypes.func,
}

export default AddProcess;
