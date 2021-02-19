import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    minHeight: 100,
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'right -400px top',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPosition: 'right -250px top',
    },
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
  },
  sectionHeader: {
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  },
}));

const veryUnhappy = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography variant='h5'>We're sorry to have failed you!</Typography>
      <Typography variant="body2">Please share share your experience below and one of our customer care managers will reach out to you as quickly as possible.</Typography>
    </div>
  );
};

veryUnhappy.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default veryUnhappy;
