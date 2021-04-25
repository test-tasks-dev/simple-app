import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
  },
  listItem: {
    borderRadius: 5,
    animation: '$fade .5s',
    background: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
    boxShadow: 'none',
    transition: 'all .3s',
    [theme.breakpoints.down(600)]: {
      borderRadius: 0,
    },
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: '0 0 10px rgba(0, 0, 155, .3)',
    }
  },
  text: {
    fontSize: '1.5rem',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  empty: {
    paddingTop: 50,
    paddingBottom: 50,
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: 50,
    color: '#bdbdbd',
  },
  divider: {
    backgroundColor: '#000 !important',
  },
  selected: {
    background: 'linear-gradient(62deg, #459ff9 0%, #c07eff 100%)',
    transform: 'scale(1.01)',
    boxShadow: '0 0 10px rgba(0, 0, 155, .3)',
  },
  fadeOut: {
    animation: '$fade-out .3s',
  },
  '@keyframes fade': {
    '0%': { opacity: 0, transform: 'scaleX(0)' },
    '100%': { opacity: 1, transform: 'scaleX(1)' },
  },
  '@keyframes fade-out': {
    '0%': { opacity: 1, transform: 'scaleX(1)' },
    '100%': { opacity: 0, transform: 'scaleX(0)' },
  }
}));
