import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui-icons/Menu'

export default class NavBar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <IconButton color="inherit">
            <Menu />
          </IconButton>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}
