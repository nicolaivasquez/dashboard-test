import React from 'react';
import PropTypes from 'prop-types';

const Process = (props) => {
  return (
    <div>
      <div>{props.id}</div>
      {
      props.editable ||
      <div>{props.name}</div>
      }
      {
      props.editable &&
        <div>
          <input value={props.name} onChange={(e) => props.handleChangeName(props.id, e.target.value)} />
          <button onClick={(e) => props.handleChangeProcessName(props.id)}>Save</button>
        </div>
      }
      <button onClick={() => props.handleRemoveProcess(props.id)}>Remove</button>
      <button disabled={props.editable} onClick={() => props.toggleEditing(props.id)}>Edit</button>
      <button>Reset</button>
      <div>Visualisation here</div>
    </div>
  )
}

Process.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleRemoveProcess: PropTypes.func,
  handleChangeName: PropTypes.func,
  handleChangeProcessName: PropTypes.func,
  toggleEditing: PropTypes.func,
  editable: PropTypes.bool,
}

export default Process;
