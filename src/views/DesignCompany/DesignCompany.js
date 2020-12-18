import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, colors } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';

import {
  About,
  Features,
  Hero,
  Integrations,
  Pricings,
  Reviews,
  Subscription,
} from './components';

import { integrations, reviews } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  hero: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-9),
    },
  },
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${colors.grey[50]} 100%, #ffffff 0%)`,
    [theme.breakpoints.up('md')]: {
      backgroundImage: `linear-gradient(180deg, ${colors.grey[50]} 50%, #ffffff 0%)`,
    },
  },
  reviewSection: {
    background: theme.palette.secondary.main,
  },
  sectionSubscription: {
    paddingTop: 0,
  },
}));

const DesignCompany = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero data-aos="fade-up" className={classes.hero} />
      <SectionAlternate className={classes.sectionAlternate}>
        <About />
      </SectionAlternate>
      <Section>
        <Integrations data={integrations} />
      </Section>
      <SectionAlternate innerNarrowed>
        <Features />
      </SectionAlternate>
      <SectionAlternate className={classes.reviewSection}>
        <Reviews data={reviews} />
      </SectionAlternate>
      <Section narrow>
        <Pricings />
      </Section>
      <Section className={classes.sectionSubscription}>
        <Subscription data-aos="fade-up" />
      </Section>
      <Divider />
    </div>
  );
};

export default DesignCompany;
