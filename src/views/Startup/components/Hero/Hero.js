import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { SectionHeader } from 'components/molecules';
import { HeroBackground } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {},
  hero: {
    padding: theme.spacing(3, 2, 30, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 0, 30, 0),
    },
  },
  noPadding: {
    padding: 0,
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <HeroBackground
        backgroundImg="/images/illustrations/cities.jpg"
        backgroundColor="white"
        backgroundPosition="bottom center"
        contentSectionClassName={classes.noPadding}
        className={classes.hero}
        disbaleCoverOpacity
      >
        <SectionHeader
          title="We craft beautiful websites and digital products."
          subtitle="We design, develop and launch websites and products for startups, companies and ourselves."
          ctaGroup={[
            <Button color="primary" variant="contained" size="large">
              Contact us
            </Button>,
          ]}
          fadeUp
          titleVariant="h3"
        />
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
