import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  About,
  Articles,
  Features,
  Hero,
  HowItWorks,
  MobileApp,
  Partners,
  Pricings,
  Reviews,
  Storage,
  Story,
  Support,
} from './components';

import {
  features,
  mobileapp,
  howItWorks,
  pricings,
  partners,
  articles,
  reviews,
} from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionAlternate: {
    backgroundImage: `linear-gradient(180deg, ${colors.grey[50]} 50%, #ffffff 0%)`,
  },
  reviewSection: {
    background: theme.palette.primary.main,
  },
}));

const CloudHosting = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <Section>
        <Features data={features} />
      </Section>
      <About />
      <Section>
        <MobileApp data={mobileapp} />
      </Section>
      <SectionAlternate className={classes.sectionAlternate}>
        <HowItWorks data={howItWorks} />
      </SectionAlternate>
      <Storage />
      <SectionAlternate className={classes.sectionAlternate} innerNarrowed>
        <Pricings data={pricings} />
      </SectionAlternate>
      <SectionAlternate>
        <Support />
      </SectionAlternate>
      <Section>
        <Articles data={articles} />
      </Section>
      <SectionAlternate>
        <Story />
      </SectionAlternate>
      <Section>
        <Partners data={partners} />
      </Section>
      <SectionAlternate className={classes.reviewSection} innerNarrowed>
        <Reviews data={reviews} />
      </SectionAlternate>
    </div>
  );
};

export default CloudHosting;
