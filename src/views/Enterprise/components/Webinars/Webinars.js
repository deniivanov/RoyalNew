import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button, Avatar } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  teamAvatar: {
    width: 250,
    height: 250,
    border: `${theme.spacing(1)}px solid white`,
    boxShadow: '0 2px 10px 0 rgba(23,70,161,.11)',
    marginTop: theme.spacing(1 / 2),
  },
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
}));

const Webinars = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <span>
            We’re focused on{' '}
            <span className="text-highlighted">your brand, not ours</span>
          </span>
        }
        subtitle="Book a place to participate to the upcoming webinars organised by our top management team."
        fadeUp
      />
      <Grid container justify="center">
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            data-aos={'fade-up'}
            justify={isMd ? 'space-between' : 'center'}
            spacing={isMd ? 4 : 2}
            className={classes.listGrid}
            direction={index % 2 === 1 ? 'row-reverse' : 'row'}
          >
            <Grid item container xs={12} sm={7} alignItems="center">
              <SectionHeader
                label={item.authorName}
                titleVariant="h5"
                title={item.title}
                subtitle={item.description}
                ctaGroup={[
                  <Button
                    variant="outlined"
                    color="secondary"
                    size={isMd ? 'large' : 'medium'}
                  >
                    Book now
                  </Button>,
                  <LearnMoreLink title="Learn more" variant="body1" />,
                ]}
                align={isMd ? 'left' : 'center'}
                disableGutter
              />
            </Grid>
            <Grid item container justify="center" xs={12} sm={5}>
              <Avatar
                {...item.authorPhoto}
                alt={item.authorName}
                className={classes.teamAvatar}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Webinars.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Webinars;
