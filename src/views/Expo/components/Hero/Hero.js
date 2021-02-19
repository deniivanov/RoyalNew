import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { HeroBackground } from 'components/organisms';

const useStyles = makeStyles(() => ({
  root: {},
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroBackground backgroundImg="https://royal-cleaning.co.uk/images/services/viewoflondon.jpg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              className={clsx(classes.textWhite, classes.title)}
            >
              End of tenancy cleaning Oxford
            </Typography>
            <Typography
            variant='h3'
            className={clsx(classes.textWhite, classes.title)}
            >
              Guaranteed deposit back from your landlord
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.textWhite}>
              Want more information? Download our overview and a member of our
              specialist team will be in touch to talk about your goals for
              TheFront 2020.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button size={isMd ? 'large' : 'medium'} variant="contained" color='secondary'>
              Get a free quote
            </Button>
          </Grid>
        </Grid>
      </HeroBackground>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
