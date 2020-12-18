import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { SectionHeader } from 'components/molecules';
import { Accordion } from 'components/organisms';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Faq = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="We are here to help"
        subtitle="Checkout our F.A.Q. if you have some questions."
        fadeUp
      />
      <Accordion items={data} />
    </div>
  );
};

Faq.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Faq;
