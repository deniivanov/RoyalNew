import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    maxWidth: 80,
    height: '100%',
    width: '100%',
  },
}));

const Integrations = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <span>
            Integrated With Your{' '}
            <span className="text-highlighted">Favorite Platforms</span>
          </span>
        }
        subtitle="Your data should be connected and portable. TheFront connects with other sources to help you get more done."
        fadeUp
      />
      <Grid container data-aos="fade-up">
        {data.map((item, index) => (
          <Grid key={index} item container xs={4} sm={2} justify="center">
            <Avatar
              src={item.logo}
              alt={item.name}
              className={classes.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Integrations.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Integrations;
