import React from 'react';
import PropTypes from 'prop-types';
import Process from './Process';

const ProcessList = (props) => {
  return (
    <div>
      <h3>ActiveProcesses</h3>
      {
      props.processes.map((process) =>
        <Process
          key={process.id}
          handleRemoveProcess={props.handleRemoveProcess}
          handleChangeName={props.handleChangeName}
          handleChangeProcessName={props.handleChangeProcessName}
          toggleEditing={props.toggleEditing}
          {...process}
        />
      )
      }
    </div>
  );
}

ProcessList.propTypes = {
  processes: PropTypes.array.isRequired,
  handleRemoveProcess: PropTypes.func,
  handleChangeName: PropTypes.func,
  handleChangeProcessName: PropTypes.func,
  toggleEditing: PropTypes.func,
}

export default ProcessList;
