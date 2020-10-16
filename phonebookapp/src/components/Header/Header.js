import React from 'react';

import {AppBar, Toolbar, Typography} from '@material-ui/core';

export default function Header() {
  return(
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h5">My Phonebook</Typography>
      </Toolbar>
    </AppBar>
  )
}