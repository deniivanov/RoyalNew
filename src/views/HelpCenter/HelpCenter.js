import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Faq, Contact, Hero } from './components';

import { faq } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));

const HelpCenter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <Section>
        <Faq data={faq} />
      </Section>
      <SectionAlternate>
        <Contact />
      </SectionAlternate>
    </div>
  );
};

export default HelpCenter;
