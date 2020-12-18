import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { Section, HeroBackground } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {},
  textWhite: {
    color: 'white',
  },
  video: {
    height: 324,
    maxWidth: 600,
    margin: '0 auto',
  },
}));

const Video = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroBackground
        backgroundImg="/images/photos/logistics/cover@2x.png"
        backgroundPosition="center center"
        backgroundColor={'#11092d'}
      >
        <Section narrow disablePadding>
          <SectionHeader
            title={<span className={classes.textWhite}>Wtach Our Video</span>}
            subtitle={
              <span className={classes.textWhite}>
                After 3 days all of your offers will arrive and you will have
                another 7 days to select your new company.
              </span>
            }
            data-aos="fade-up"
          />
          <HeroBackground
            backgroundImg="/images/photos/logistics/cover@2x.png"
            backgroundPosition="center center"
            disbaleCoverOpacity
            className={classes.video}
            data-aos="fade-up"
          >
            <IconAlternate
              fontIconClass="fas fa-play"
              color={colors.grey}
              shape="circle"
            />
          </HeroBackground>
        </Section>
      </HeroBackground>
    </div>
  );
};

Video.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Video;
