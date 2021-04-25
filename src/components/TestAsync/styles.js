import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.success.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    }
  }
}));
