import React, {useState} from 'react'
import { useRouter } from 'next/router'
import {
    Grid,
    TextField,
    Button,
  } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
    }
  }));
  


export default function () {

    const router = useRouter()

    const [submitting, setSubmitting] = useState(true)

    const classes = useStyles();

    const validationSchema = Yup.object().shape({
        feedbackInfo: Yup.string().min(5, 'Pease be a bit more specific'),  
        })
        return (
<Formik 
    initialValues={{feedbackInfo: '', satisfaction : 'happy' }} 
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
        satisfaction === 'happy'?
        setTimeout(function(){router.push('https://www.trustpilot.com/evaluate/royal-cleaning.co.uk?stars=5')}, 4000)
        : null
      )
    }}
    >
      {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
        <div className={classes.root}>
          <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id='feedbackInfo'
                  placeholder="Let us know your thoughts"
                  label="Field is entirely optional"
                  variant="outlined"
                  size="medium"
                  name="feedbackInfo"
                  fullWidth
                  helperText={Boolean(touched.feedbackInfo && errors.feedbackInfo) ? errors.feedbackInfo : null}
                  error={Boolean(touched.feedbackInfo && errors.feedbackInfo)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  multiline
                  rows={4}
                  value={values.feedbackInfo}
                />
              </Grid>
              <Grid item xs={12}>
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
                  {Boolean(submitting === true) ? 'Send additional feedback' : 'Thank you!'}
                </Button>
              </Grid>
            </Grid>
            </form>
        </div>)}
        </Formik>
        )
}