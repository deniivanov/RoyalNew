import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  AboutBottom,
  AboutMiddle,
  AboutTop,
  Advantages,
  Customers,
  Features,
  Hero,
  Jobs,
  Newsletter,
  Partners,
  Process,
  PromoNumbers,
  PromoSwiper,
  Questions,
  TrustedCompanies,
} from './components';

import {
  partners,
  process,
  features,
  jobs,
  advantages,
  companies,
  promo,
  reviews,
} from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionAlternate: {
    backgroundColor: colors.indigo[50],
  },
  promoSection: {
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(12, 2),
    },
  },
}));

const JobListing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Partners data={partners} />
      </Section>
      <SectionAlternate className={classes.sectionAlternate}>
        <Questions />
      </SectionAlternate>
      <Section>
        <Process data={process} />
      </Section>
      <SectionAlternate className={classes.sectionAlternate}>
        <AboutTop />
      </SectionAlternate>
      <Section>
        <Jobs data={jobs} />
      </Section>
      <SectionAlternate className={classes.sectionAlternate}>
        <PromoNumbers />
      </SectionAlternate>
      <AboutMiddle />
      <Section>
        <Features data={features} />
      </Section>
      <section className={clsx(classes.sectionAlternate, classes.promoSection)}>
        <PromoSwiper data={promo} />
      </section>
      <Section>
        <Advantages data={advantages} />
      </Section>
      <SectionAlternate className={classes.sectionAlternate}>
        <TrustedCompanies data={companies} />
      </SectionAlternate>
      <AboutBottom />
      <Section>
        <Customers data={reviews} />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Newsletter />
      </Section>
      <Divider />
    </div>
  );
};

export default JobListing;
