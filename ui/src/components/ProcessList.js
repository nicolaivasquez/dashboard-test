import React from 'react';
import PropTypes from 'prop-types';
import Process from './Process';
import Typography from '@material-ui/core/Typography';

const ProcessList = (props) => {
  return (
    <div>
      <Typography variant='title'>Active Processes</Typography>
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
