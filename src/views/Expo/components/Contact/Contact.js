import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { ContactForm } from 'common';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Contact = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <CardBase withShadow data-aos="fade-up">
        <ContactForm />
      </CardBase>
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Contact;
