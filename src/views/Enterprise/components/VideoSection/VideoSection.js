import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  videoIframe: {
    boxShadow: '0 5px 15px 0 rgba(30,76,165,.2)',
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none',
    },
  },
}));

const VideoSection = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title="Launch Your Website Marketing Platform"
            subtitle="We help digital agencies, local business and managed service providers to have the best Website Marketing service."
            ctaGroup={[
              <Button
                variant="contained"
                color="primary"
                size={isMd ? 'large' : 'medium'}
              >
                see plans & pricings
              </Button>,
            ]}
            align={isMd ? 'left' : 'center'}
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <iframe
            className={classes.videoIframe}
            title="video"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ClIbn_IF31U"
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          />
        </Grid>
      </Grid>
    </div>
  );
};

VideoSection.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default VideoSection;
