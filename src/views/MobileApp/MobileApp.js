import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';

import { About, Features, Community, Pricings, Download } from './components';

import { community, features, pricings } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));

const MobileApp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <About />
      <Divider />
      <Section>
        <Community data={community} />
      </Section>
      <SectionAlternate>
        <Features data={features} />
      </SectionAlternate>
      <Section>
        <Pricings data={pricings} />
      </Section>
      <Divider />
      <Section>
        <Download />
      </Section>
      <Divider />
    </div>
  );
};

export default MobileApp;
