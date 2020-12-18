import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Checkbox, FormControlLabel, FormHelperText} from '@material-ui/core'
import {Alert} from '@material-ui/lab';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { Hero } from './components/'
import {Formik} from 'formik'
import * as Yup from 'yup'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  section: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  },
  cover: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '47vw',
      maxWidth: 740,
      height: '100%',
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },
  image: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
      maxWidth: '100%',
      height: '100%',
    },
  },
  content: {
    flex: '0 0 100%',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 50%',
      maxWidth: '50%',
    },
  },
}));

export default function ContactPageCover () {
    const classes = useStyles();

    const [submitting, setSubmitting] = useState(true)
    
    const validationSchema = Yup.object().shape({
      name: Yup.string().required('Please fill in your name'),  
      email: Yup.string().required('Email is a required field').email('Please fill in a valid email address'),
      refNum: Yup.string().min(3, 'At least 3 characters long').max(11, 'Should be less then 8 characters'),
      terms: Yup.bool().oneOf([true], 'Please accept our terms and condition').required()
      })
      return (
        <>
         <Hero/>
         <Section>
           <Typography align='center' variant='h3'>Please fill in the form below</Typography>
           <Divider flexItem />
    <Formik 
    initialValues={{name: '', email: '', refNum: '', marketing: true, terms: false }} 
    validationSchema={validationSchema}
    onSubmit={async (values) => {
      await fetch('/api/contact-us', {
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(values),
      }).then (async (res) => {
        await res.status === 200 ? setSubmitting(false) : null;
      })
      .then(
        setTimeout(function(){location.reload()}, 5000)
      )
    }}
    >
      {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
        <div className={classes.root}>
          <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  placeholder="John Doe"
                  label="Name *"
                  variant="outlined"
                  size="medium"
                  name="name"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.name && errors.name)}
                  helperText={Boolean(touched.name && errors.name) ? errors.name : null}
                  type="name"
                  value={values.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Email"
                  label="Email *"
                  variant="outlined"
                  size="medium"
                  name="email"
                  fullWidth
                  helperText={Boolean(touched.email && errors.email) ? errors.email : null}
                  error={Boolean(touched.email && errors.email)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  value={values.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Reference Number"
                  label="Reference Number"
                  variant="outlined"
                  size="medium"
                  name="refNum"
                  fullWidth
                  helperText={Boolean(touched.refNum && errors.refNum) ? errors.refNum : null}
                  error={Boolean(touched.refNum && errors.refNum)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  value={values.refNum}
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
              <FormControlLabel
        control={<Checkbox
          name='marketing'
          id='marketing'
          value={values.marketing}
    checked={values.marketing}
    onChange={handleChange}
    inputProps={{ 'aria-label': 'primary checkbox' }}
    size='small'
  >{values.marketing}</Checkbox>}
        label="I'd like to receive marketing information and promotional offers"
      />
              {values.marketing ? <Alert>We'll keep communication over e-mail only. Please keep an eye on your spam folder!</Alert> : null}
              </Grid>
              <Grid item xs={12}>
              <FormControlLabel
        control={<Checkbox
          name='terms'
          id='terms'
          value={values.terms}
    checked={values.terms}
    onChange={handleChange}
    inputProps={{ 'aria-label': 'primary checkbox' }}
    size='small'
  >{values.terms}</Checkbox>}
        label="I accept the terms and conditions"
      />
      {!values.terms ? <FormHelperText error='true'>{errors.terms}</FormHelperText> : null}
              </Grid>
              <Grid item xs={12}>
                <Button
                  size="large"
                  variant="contained"
                  type="submit"
                  color={submitting ? 'primary' : 'secondary'}
                  disabled={Boolean(submitting === true) ? false : true}
                  fullWidth
                >
                  {Boolean(submitting === true) ? 'Submit Form' : 'Submitted'}
                </Button>
              </Grid>
            </Grid>
            </form>
        </div>)}
        </Formik>
        </Section>
        </>
      );
    };
