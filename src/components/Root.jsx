import React, {Fragment} from 'react'
import Grid from 'material-ui/Grid'
import NavBar from './NavBar'
import Content from './Content'
import ThemeContainer from '../ThemeContainer'

const Root = () => (
  <Grid container>
    <NavBar />
    <Content />
  </Grid>
)
export default ThemeContainer(Root)