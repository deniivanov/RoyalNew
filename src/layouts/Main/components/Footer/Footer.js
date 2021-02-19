import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
  Link
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import {socialLinks} from '../../../../socials'
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: '#3cb481',
  },
  footerContainer: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 130,
    height: 45,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgba(255,255,255,.6)',
  },
}));

const Footer = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  const landings = pages.landings;
  const supportedPages = pages.pages;

  const socials = socialLinks;
  const preventDefault = (event) => event.preventDefault();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid container item xs={12} md={12} className={classes.menuListContainer}>
            <Grid container spacing={0}>
            <Grid item xs={6} md={3}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <a href="/" title="thefront">
                    <Image
                      className={classes.logoImage}
                      src="http://cdn.mcauto-images-production.sendgrid.net/62ec4b4714644024/4b5d3ca5-c02d-4c08-9549-0b4c1865d683/3917x1458.png"
                      alt="thefront"
                      lazy={false}
                    />
                  </a>
                </div>
              </ListItem>
              <ListItem disableGutters>
                <IconButton className={classes.socialIcon} href={socials.facebook}>
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon} href={socials.pinterest}>
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon} href={socials.instagram}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon} href={socials.twitter}>
                  <PinterestIcon className={classes.icon} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
              <Grid item xs={6} md={3} className={classes.listItem}>
              <List>
              <ListItem disableGutters className={classes.menuGroupTitle}>Services</ListItem>
              <Typography><Link
              className={classes.navLink}
              component="a"
              variant="body2"
              underline='none'
              href='https://royal-cleaning.co.uk/end-of-tenancy-cleaning'
              >
              End of tenancy cleaning
              </Link>
              </Typography>
              <Typography>
              <Link
              className={classes.navLink}
              component="a"
              variant="body2"
              underline='none'
              href='https://royal-cleaning.co.uk/carpet-cleaning'
              >
              Carpet cleaning
              </Link>
              </Typography>
              <Typography>
              <Link
              className={classes.navLink}
              component="a"
              variant="body2"
              underline='none'
              >
              After builders cleaning
              </Link>
              </Typography>
              <Typography>
              <Link
              className={classes.navLink}
              component="a"
              variant="body2"
              underline='none'
              >
              Oven cleaning
              </Link>
              </Typography>
              <Typography>
              <Link
              className={classes.navLink}
              component="a"
              variant="body2"
              underline='none'
              >
              Upholstery cleaning
              </Link>
              </Typography>
              </List>
            </Grid>
            <Grid item xs={6} md={3} className={classes.listItem}>
              <List>
              <ListItem disableGutters className={classes.menuGroupTitle}>Contacts</ListItem>
              <Typography>
              <Link
              className={classes.navLink}
              component="a"
              variant="body2"
              underline='none'
              >
              Obla
              </Link>
              </Typography>
              <Typography>
              <Link
              className={classes.navLink}
              component="a"
              variant="body2"
              underline='none'
              target="_blank"
              href='https://google.com'
              onClick={preventDefault}
              >
              Fanat
              </Link>
              </Typography>
              </List>
            </Grid>
            <Grid item xs={6} md={3} className={classes.listItem}>
              <List>
              <ListItem disableGutters className={classes.menuGroupTitle}>Navigation</ListItem>
              <Typography><Link
              className={classes.navLink}
              component="a"
              variant="body2"
              underline='none'
              >About us
              </Link>
              </Typography>
              <Typography><Link
              className={classes.navLink}
              component="a"
              variant="body2"
              underline='none'
              >Terms and conditions
              </Link>
              </Typography>
              <Typography><Link
              className={classes.navLink}
              component="a"
              variant="body2"
              underline='none'
              >Privacy Policy
              </Link>
              </Typography>
              <Typography><Link
              className={classes.navLink}
              component="a"
              variant="body2"
              underline='none'
              href='https://google.com'
              >FAQ
              </Link>
              </Typography>
              </List>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
