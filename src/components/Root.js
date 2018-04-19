import React, {Fragment} from 'react'
import CssBaseline from 'material-ui/CssBaseline'
import Button from 'material-ui/Button'
import Inbox from 'material-ui-icons/Inbox'

const Root = () => (
  <Fragment>
    <CssBaseline />
    <Button variant="raised">
      Hello World
    </Button>
    <Inbox />
  </Fragment>
)
export default Root