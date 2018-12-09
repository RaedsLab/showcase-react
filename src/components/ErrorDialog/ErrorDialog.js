import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './ErrorDialog.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function reload() {
  window.location.reload();
}

const ErrorDialog = function ErrorDialog(props) {
  return (
    <Dialog
      open={props.isOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'There was an issue'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={reload} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ErrorDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default withStyles(styles)(ErrorDialog);
