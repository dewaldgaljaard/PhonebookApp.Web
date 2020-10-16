import React from 'react';
import Header from '../Header/Header';
import Phonebook from '../../containers/Phonebook/Phonebook';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  }
}));

export default function Layout() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Header/>
      <Phonebook/>
    </div>
  )
}
