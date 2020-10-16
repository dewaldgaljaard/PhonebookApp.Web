import React, {Component} from 'react';

import {Grid, Typography, TextField, Button} from '@material-ui/core';

import axios from 'axios';

export default class Phonebook extends Component {
  state = {
    phoneBook : {}
  }

  componentDidMount() {
    console.log('inside Component did mount')
    axios.get(`http://localhost:54850/api/Phonebooks`)
      .then(res => {
        const phoneBook = res.data;
        this.setState({ phoneBook });
      })
  }
  
  render() {
    return (
      <Grid container>
        
        <Grid item xm={0} lg={2}>
        </Grid>
  
        <Grid container item xm={12} lg={8}>
          
          <Grid item xs={12}>
                <br />
                <Typography variant="h5">Contacts for Phonebook 'Default'</Typography>
                <br />
            </Grid>
  
  
            {/* Body Row 1*/}
            <Grid item xs={12} sm={2}>
            </Grid>
            <Grid item xs={12} sm={8}>
                <TextField id="standard-basic1" label="Name" />&nbsp;&nbsp;
                <TextField id="standard-basic2" label="Phone Number" />
                <br />
                <br />
                <Button variant="contained" color="primary" onClick={() => { alert('clicked') }}>
                  Add Contact
                </Button>
                <br />
                <br />
            </Grid>
            <Grid item xs={12} sm={2}>
            </Grid>
            {/* Body End Row 1*/}
  
          </Grid>
  
      </Grid>
    )
  }
  
}