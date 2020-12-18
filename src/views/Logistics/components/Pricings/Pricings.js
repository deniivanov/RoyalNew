import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  colors,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardPricingStandard } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Pricings = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Our pricing"
        subtitle="Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world."
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} md={4} data-aos="fade-up" key={index}>
            <CardPricingStandard
              variant="outlined"
              withShadow={item.isHighlighted ? true : false}
              title={item.title}
              liftUp
              subtitle={item.subtitle}
              priceComponent={
                <div>
                  <Typography
                    variant="h3"
                    component="span"
                    className={classes.fontWeight900}
                  >
                    {item.price}
                  </Typography>
                  <Typography component="span" variant="subtitle1">
                    {item.priceSuffix}
                  </Typography>
                </div>
              }
              features={item.features}
              featureCheckComponent={
                <Icon
                  fontIconClass="far fa-check-circle"
                  fontIconColor={colors.indigo[500]}
                />
              }
              cta={
                <Button
                  color="primary"
                  variant={item.isHighlighted ? 'contained' : 'outlined'}
                  fullWidth
                  size="large"
                >
                  Subscribe now
                </Button>
              }
              disclaimer={item.disclaimer}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Pricings.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Pricings;
