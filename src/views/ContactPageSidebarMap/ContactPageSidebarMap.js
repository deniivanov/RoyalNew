import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section } from 'components/organisms';
import { Form, Contact } from './components';

import { mapData } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));

const ContactPageSidebarMap = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form data={mapData} />
      <Section>
        <Contact />
      </Section>
      <Divider />
    </div>
  );
};

export default ContactPageSidebarMap;
