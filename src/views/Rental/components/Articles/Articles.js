import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Articles = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="center" spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} md={4} key={index} data-aos="fade-up">
            <SectionHeader
              titleVariant="h6"
              title={item.title}
              subtitle={item.subtitle}
              subtitleColor="textPrimary"
              subtitleVariant="body1"
              ctaGroup={[
                <LearnMoreLink title="Learn more" variant="subtitle1" />,
              ]}
              align="left"
              disableGutter
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Articles.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Articles;
