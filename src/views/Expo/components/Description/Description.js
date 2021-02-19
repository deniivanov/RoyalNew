import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Description = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            className={clsx(classes.textWhite, classes.title)}
          >
            Royal Cleaning: A clean home is a better home
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="p" className={classes.textWhite}>
            Royal Cleaning is one of the leading cleaning companies in Oxfordshire and has been providing professional cleaning services in the area for the past 10 years. The business has established it's name as one of the leaders in the industry and is constantly improving for the benefit of our clients.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Description.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Description;
