import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 4),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 9),
    },
  },
  playStoreBtn: {
    maxWidth: 152,
  },
  textWhite: {
    color: 'white',
  },
}));

const Download = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <span className={classes.textWhite}>
            Download the travellers community app now!
          </span>
        }
        subtitle={
          <span className={classes.textWhite}>
            Don't listen to what they say go and see. Travelling with our app is
            easy. Join the biggest community of travellers.
          </span>
        }
        ctaGroup={[
          <Image
            src="/images/mobile-addons/app-store.png"
            alt="Get in on App Store"
            className={classes.playStoreBtn}
            lazy={false}
          />,
          <Image
            src="/images/mobile-addons/play-store.png"
            alt="Get in on Play Market"
            className={classes.playStoreBtn}
            lazy={false}
          />,
        ]}
        align="center"
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Download.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Download;
