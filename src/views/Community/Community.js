import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton
} from '@material-ui/core';
import {SentimentVeryDissatisfied, SentimentDissatisfied, SentimentSatisfied, SentimentVerySatisfied } from '@material-ui/icons'
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { Hero, VeryUnhappy, Unhappy, Happy, VeryHappy, Form, Features} from './components'


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  section: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  },
  cover: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '47vw',
      maxWidth: 740,
      height: '100%',
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },
  image: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
      maxWidth: '100%',
      height: '100%',
    },
  },
  content: {
    flex: '0 0 100%',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 50%',
      maxWidth: '50%',
    },
  },
  icons : {
    height: 100,
    width: 100,
    veryunhappy : {
      height: 50,
      width: '100%',
      backgroundColor: 'd45953',
    },
    unhappy : {
      height: 50,
      width: '100%',
      color: 'c9952c'
    },
    happy: { 
      height: 50,
      width: '100%',
      color: 'a4e0aa'
    },
    veryhappy : { 
      height: 50,
      width: '100%',
      color: '37de82'
    },
    svg : {
      width: 70,
      height: 70,
      fill: 'red'
    }
  }
}));

export default function Community () {
    const classes = useStyles();

    const [feedback, setFeedback] = useState(null)

    function appendFeedback() {
      return feedback === 'veryUnhappy' ? <><VeryUnhappy/><Form/></>
           : feedback === 'unhappy' ? <><Unhappy/><Form/></>
           : feedback === 'happy' ? <><Happy/><Form/></>
           : feedback=== 'veryHappy' ? <><VeryHappy/><Form/></>
           : null;
  }

  function replaceIcon() {
    return feedback === 'veryUnhappy' ? <SentimentVeryDissatisfied style={{fill: "#fd2c1c", fontSize: 120}}/>
         : feedback === 'unhappy' ? <SentimentDissatisfied style={{fill: "#fdb91c", fontSize: 120}}/>
         : feedback === 'happy' ? <SentimentSatisfied style={{fill: "#6eb094", fontSize: 120}}/>
         : feedback=== 'veryHappy' ? <SentimentVerySatisfied style={{fill: "#40ba87", fontSize: 120}}/>
         : null;
}
      return (
        <>
         <Hero/>
         <Features/>
        </>
      );
    };
