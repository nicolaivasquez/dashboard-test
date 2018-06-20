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
          {...process}
        />
      )
      }
    </div>
  );
}

ProcessList.propTypes = {
  processes: PropTypes.array.isRequired,
}

export default ProcessList;