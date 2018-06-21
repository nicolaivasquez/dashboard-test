import React from 'react';
import PropTypes from 'prop-types';

const AddProcess = (props) => {
  return (
    <div>
    {props.showAddForm ||
      <button name='toggleAddProcess' onClick={props.handleShowAddForm}>Add Process</button>
    }
    {props.showAddForm &&
      <form name='addForm' onSubmit={(e) => e.preventDefault()}>
        <label>Name</label>
        <input onChange={(e) => props.changeNewProcessName(e.target.value)} />
        <button onClick={props.handleAddProcess}>Create Process</button>
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
