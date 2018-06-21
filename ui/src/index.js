import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <App />
  </React.Fragment>, document.getElementById('root'));
registerServiceWorker();
