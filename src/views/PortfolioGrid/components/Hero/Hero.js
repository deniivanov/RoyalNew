import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  colors,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
} from '@material-ui/core';
import { Image, Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {},
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  textWhite: {
    color: 'white',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  shapeContainer: {
    width: '100%',
    background: theme.palette.primary.main,
    position: 'relative',
    height: '100%',
  },
  shapeImage: {
    objectFit: 'cover',
    position: 'relative',
    bottom: '-5px',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  searchInputContainer: {
    background: 'white',
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0 !important',
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2),
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 0,
    },
    '& .MuiOutlinedInput-input': {
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  input: {
    background: 'white',
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.sectionContainer}>
        <Section narrow>
          <SectionHeader
            title="Our Work"
            subtitle="We design & build products, tools, apps, and sites for companies trying to do great things for our planet."
            titleProps={{
              className: clsx(classes.textWhite, classes.fontWeightBold),
              variant: 'h2',
            }}
            subtitleProps={{
              className: classes.textWhite,
            }}
            data-aos="fade-up"
          />
          <div className={classes.searchInputContainer} data-aos="fade-up">
            <FormControl fullWidth variant="outlined">
              <OutlinedInput
                className={classes.input}
                size="large"
                startAdornment={
                  <InputAdornment position="start">
                    <Icon
                      fontIconClass="fas fa-search"
                      fontIconColor={colors.blueGrey[900]}
                    />
                  </InputAdornment>
                }
                placeholder="Search for the article"
              />
            </FormControl>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={classes.searchButton}
            >
              Search
            </Button>
          </div>
        </Section>
      </div>
      <div>
        <div className={classes.shapeContainer}>
          <Image
            src="/images/shapes/triangle-shape.svg"
            className={classes.shapeImage}
            lazy={false}
          />
        </div>
      </div>
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
