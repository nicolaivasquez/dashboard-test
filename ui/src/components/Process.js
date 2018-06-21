import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'

const Process = (props) => {
  return (
    <Card>
      <CardContent>
      {
      props.editable ||
      <Typography variant='subheading'>{props.name}</Typography>
      }
      {
      props.editable &&
        <form onSubmit={(e) => e.preventDefault()}>
          <TextField value={props.name} onChange={(e) => props.handleChangeName(props.id, e.target.value)} />
          <Button color='primary' onClick={(e) => props.handleChangeProcessName(props.id)}>Save</Button>
        </form>
      }
      </CardContent>
      <CardActions>
        <Button color='secondary' onClick={() => props.handleRemoveProcess(props.id)}>Remove</Button>
        <Button color='primary' disabled={props.editable} onClick={() => props.toggleEditing(props.id)}>Edit</Button>
        <Button>Reset</Button>
      </CardActions>
      <CardContent>
        <div>Visualisation here</div>
      </CardContent>
    </Card>
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
