import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Checkbox, FormControlLabel, FormHelperText, FormControl, Select, MenuItem, InputLabel} from '@material-ui/core'
import {Phone, Email, Chat} from '@material-ui/icons'
import {Alert, AlertTitle} from '@material-ui/lab';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  ListItemAvatar,
  List,
  ListItem,
  Avatar,
  ListItemText,
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
    const [submitting, setSubmitting] = useState(true);
    const [notify, setNotify] = useState(false)
    const validationSchema = Yup.object().shape({
      name: Yup.string().required('Please fill in your name'),  
      email: Yup.string().required('Email is a required field').email('Please fill in a valid email address'),
      mobile: Yup.string('Can not contain letters').min(10, 'Should be at least 10 characters').max(13, 'Can not be more then 14 characters').matches(new RegExp('[0-9]{7}'), 'That does not look like a phone number'),
      postcode: Yup.string().min(3, 'At least 3 characters long').max(11, 'Should be less then 8 characters'),
      service:Yup.string(),
      terms: Yup.bool().oneOf([true], 'Please accept our terms and condition').required()
      })
      return (
        <>
         <Hero/>
         <Section>
           <Typography align='center' variant='h3'>Please fill in the form below</Typography>
           <Typography align='center' variant='h6'>Our associates will do their best to reply to you within 15-20 minutes</Typography>
    <Formik 
    initialValues={{name: '', email: '', mobile: '', postcode: '', service: '', selectedDate: '', marketing: false, terms: false }} 
    validationSchema={validationSchema}
    onSubmit={async (values) => {
       await fetch('/api/contact-us', {
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(values),
      }).then(async res => {
        await res.status === 200 ? (setNotify(true), setSubmitting(false)) : console.log('Гръмна брат');
      })
      .then(
        console.log(submitting),
        /* setTimeout(function(){location.reload()}, 30000) */
      )
    }}
    >
      
      {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
        
        <div className={classes.root}>
          <form name="Get a quote Form" method="post" onSubmit={handleSubmit}>
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
                  placeholder="Mobile"
                  label="Mobile"
                  variant="outlined"
                  size="medium"
                  name="mobile"
                  fullWidth
                  helperText={Boolean(touched.mobile && errors.mobile) ? errors.mobile : null}
                  error={Boolean(touched.mobile && errors.mobile)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="tel"
                  value={values.mobile}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Postcode"
                  label="Postcode"
                  variant="outlined"
                  size="medium"
                  name="postcode"
                  fullWidth
                  helperText={Boolean(touched.postcode && errors.postcode) ? errors.postcode : null}
                  error={Boolean(touched.postcode && errors.postcode)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  value={values.postcode}
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl fullWidth={true} className={classes.formControl}>
        <Select
          variant='outlined'
          label='Select Service'
          labelId="Service"
          id="service"
          name="service"
          fullWidth={true}
          placeholder="Service Required"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.service}
        >
          <MenuItem value='None Selected'>Select Service</MenuItem>
          <MenuItem value='End of tenancy cleaning'>End of tenancy cleaning</MenuItem>
          <MenuItem value='After builders cleaning'>After builders cleaning</MenuItem>
          <MenuItem value='Carpet cleaning'>Carpet cleaning</MenuItem>
          <MenuItem value='Oven cleaning'>Oven cleaning</MenuItem>
          <MenuItem value='Upholstery cleaning'>Upholstery cleaning</MenuItem>
          <MenuItem value='Mattress cleaning'>Mattress cleaning</MenuItem>
          <MenuItem value='Jet Wash cleaning'>Jet Wash cleaning</MenuItem>
        </Select>
      </FormControl>
              </Grid>
              <Grid item xs={12}>
  <TextField
  fullWidth={true}
  variant='outlined'
    id='selectedDate'
    name='selectedDate'
    label="When do you need the service"
    type="date"
    defaultValue="2020-01-01"
    onChange={handleChange}
    onBlur={handleBlur}
    InputLabelProps={{
      shrink: true,
    }}
    value={values.selectedDate}
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
          name='terms'
          id='terms'
          value={values.terms}
    checked={values.terms}
    onChange={handleChange}
    inputProps={{ 'aria-label': 'primary checkbox' }}
    size='small'
  >{values.terms}</Checkbox>}
        label="I have read and accept your terms and conditions"
      />
      {!values.terms ? <FormHelperText error='true'>{errors.terms}</FormHelperText> : null}
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
        label="Subscribe to receive offers via email"
      />
              </Grid>
              <Grid item xs={12}>
                <Button
                  size="large"
                  variant="contained"
                  type="submit"
                  color={submitting ? 'secondary' : 'primary'}
                  disabled={Boolean(submitting === true) ? false : true}
                  fullWidth
                >
                  {Boolean(submitting === true) ? 'Send Request' : 'Thank you!'}
                </Button>
              </Grid>
            </Grid>
            </form>
        </div>)}
        </Formik>
        {notify ? <Alert severity="success">
  <AlertTitle>Thank you!</AlertTitle>
  One of our associates will be in touch with you within <strong>15-20 minutes</strong>
</Alert> : null}
        </Section>
        <Divider/>
        <Section>
        <div>
      <SectionHeader
        title="Contact details"
        subtitle="Real people, ready to answer your questions right now!"
        data-aos="fade-up"
        align='center'
      />
      <List disablePadding className={classes.list}>
      <Grid container justify='center' spacing={2}>
      <Grid item xs={12} sm={4}>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemAvatar className={classes.listItemAvatar}>
            <Avatar>
              <Phone/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className={classes.listItemText}
            primary="Phone"
            secondary="020 8050 2865 "
            primaryTypographyProps={{
              className: classes.title,
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
              component: 'span',
            }}
          />
        </ListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemAvatar className={classes.listItemAvatar}>
            <Avatar>
            <Email />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className={classes.listItemText}
            primary="Email"
            secondary="info@royal-cleaning.co.uk"
            primaryTypographyProps={{
              className: classes.title,
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
            }}
          />
        </ListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemAvatar className={classes.listItemAvatar}>
            <Avatar>
            <Chat />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className={classes.listItemText}
            primary="Head Office"
            secondary="20-22 Wenlock Road, N1 7GU, London"
            primaryTypographyProps={{
              className: classes.title,
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
            }}
          />
        </ListItem>
        </Grid>
        </Grid>
      </List>
      
    </div>
        </Section>
        </>
      );
    };
