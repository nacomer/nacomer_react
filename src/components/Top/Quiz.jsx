import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

export default function Quiz(props) {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.paper} xs={12}>
      <h2 id="transition-modal-title">Transition modal</h2>
      <p id="transition-modal-description">
        react-transition-group animates me.
        <br />
        react-transition-group animates me.
        <br />
        react-transition-group animates me.
        <br />
        react-transition-group animates me.
        <br />
        react-transition-group animates me.
        <br />
      </p>
    </Paper>
  );
}
