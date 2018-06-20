import React from 'react';
import PropTypes from 'prop-types';

const Process = (props) => {
  return (
    <div>
      <div>{props.id}</div>
      <div>{props.name}</div>
      <button>Remove</button>
      <button>Edit</button>
      <button>Reset</button>
      <div>Visualisation here</div>
    </div>
  )
}

Process.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default Process;
