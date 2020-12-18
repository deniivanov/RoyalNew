import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab'
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
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is a required field').email('Please fill in a valid email address'),
    companyName: Yup.string().required('Please fill in your company name').min(2, 'This seems too short to be a company name').max(25, 'That is a very long company name'),
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
          <Grid item xs={6}>
            <TextField
              placeholder="First name"
              label="First name *"
              variant="outlined"
              size="medium"
              name="firstName"
              fullWidth
              onBlur={handleBlur}
              onChange={handleChange}
              type="firstName"
              value={values.firstName}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={Boolean(touched.firstName && errors.firstName) ? errors.firstName : null}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="Last name"
              label="Last name *"
              variant="outlined"
              size="medium"
              name="lastName"
              fullWidth
              onBlur={handleBlur}
              onChange={handleChange}
              type="lastName"
              value={values.lastName}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={Boolean(touched.lastName && errors.lastName) ? errors.lastName : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              error={Boolean(touched.email && errors.email)}
              helperText={Boolean(touched.email && errors.email) ? errors.email : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Company ltd."
              label="Company Name *"
              variant="outlined"
              size="medium"
              name="companyName"
              fullWidth
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.companyName}
              error={Boolean(touched.companyName && errors.companyName)}
              helperText={Boolean(touched.companyName && errors.companyName) ? errors.companyName : null}
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
              onBlur={handleBlur}
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
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Success!' : 'Send'}
            </Button>
            {isSubmitting ? <Alert severity="success">Thank you for your submission, please check your email to verify your account!</Alert> : null}
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
            >
              Already have an account?{' '}
              <LearnMoreLink title="Sign in" href="/signin-cover" />
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>)}
    </Formik>
  );
};

