import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  btnAdd: {
    marginRight: 20,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    minHeight: '90%',
    padding: '3rem',
    boxShadow: '0 0 10px rgba(0, 0, 155, .3)',
    margin: 'auto',
    marginTop: '3rem',
    [theme.breakpoints.down(600)]: {
      width: 'auto',
      height: '100%',
      padding: 0,
      margin: 0,
    }
  }
}));