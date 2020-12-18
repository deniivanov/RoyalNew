import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import {Alert} from '@material-ui/lab'
import validate from 'validate.js';
import { LearnMoreLink } from 'components/atoms';
import {Formik} from 'formik'
import * as Yup from 'yup'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));
export default function Form () {
const classes = useStyles(); 

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is a required field').email('Please fill in a valid email address'),
    password: Yup.string().required()
  })
  return (
<Formik 
initialValues={{firstName: '', lastName: '',  email: '', password: '', companyName: ''}} 
validationSchema={validationSchema}
onSubmit={(values, {setSubmitting, resetForm}) => {
  setSubmitting(true),
  console.log(JSON.stringify(values))
}}
>
  {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              onChange={handleChange}
              helperText={Boolean(touched.email && errors.email)}
              type="email"
              value={values.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Password"
              label="Password *"
              variant="outlined"
              size="medium"
              name="password"
              fullWidth
              helperText={Boolean(touched.password && errors.password)}
              error={Boolean(touched.password && errors.password)}
              onChange={handleChange}
              type="password"
              value={values.password}
            />
          </Grid>
          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Sign In
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
            >
              Forgot your password?{' '}
              <LearnMoreLink
                title="Reset password"
                href="/password-reset-cover"
              />
            </Typography>
          </Grid>
        </Grid>
        </form>
    </div>)}
    </Formik>
  );
};