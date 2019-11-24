import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import {
  Paper,
  Typography,
  TextField,
  Grid,
  withStyles,
  Button
} from "@material-ui/core"

const style = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  text: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
})

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  custom
}) => {
  return (
    <TextField
      label={label}
      placeholder={label}
      error={touched && error}
      className={custom.classes.text}
      variant="outlined"
      {...input}
      {...custom}
    />
  )
}
const handleSubmit = values => {
  values.preventDefault()
  console.log("Form Submitted")
  console.log(values.target)
}
class profile extends Component {
  render() {
    const { classes, data } = this.props
    return (
      <Paper>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={1}
            justify="center"
            direction="row"
            alignItems="stretch"
          >
            <Grid item xs={12}>
              <Field
                name="username"
                component={renderTextField}
                label="Username"
                custom={{ disabled: true, classes }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="name"
                component={renderTextField}
                label="Name"
                custom={{ classes }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="email"
                component={renderTextField}
                label="Email"
                custom={{ classes, type: "email" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="phoneNum"
                component={renderTextField}
                label="Phone"
                custom={{ classes }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="avatar"
                component={renderTextField}
                label="Avatar"
                custom={{ classes }}
              />
            </Grid>
            <Grid item xs={12}>
              <button type="submit">Submit</button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    )
  }
}

export default withStyles(style)(
  reduxForm({
    form: "UserProfile",
    validate: null
  })(profile)
)
