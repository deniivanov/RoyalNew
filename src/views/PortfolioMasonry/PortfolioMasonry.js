import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Hero, Main, Partners, Contact } from './components';

import { folio, partners } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));

const PortfolioMasonry = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <Partners data={partners} />
      <Section>
        <Main data={folio} />
      </Section>
      <SectionAlternate>
        <Contact />
      </SectionAlternate>
    </div>
  );
};

export default PortfolioMasonry;
