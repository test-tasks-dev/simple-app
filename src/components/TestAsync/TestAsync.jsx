import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import { useStyles } from './styles';

export const TestAsync = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userReducer: { fetching, user, error: hasError } } = useSelector(state => state);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = () => {
    dispatch({ type: 'user/getUser' });
  };

  const action = key => (
    <Button
      style={{ color: '#fff' }}
      onClick={() => {
        closeSnackbar(key)
      }}
    >
      X
    </Button>
  );

  useEffect(() => {
    if (user.name && !hasError.status) {
      const message = (
        <div>
          <div>имя: {user.name}</div>
          <div>email: {user.email}</div>
        </div>
      );
      enqueueSnackbar(message, { action });
    }
  }, [user]);

  useEffect(() => {
    if (hasError.status) {
      enqueueSnackbar(
        hasError.message,
        {
          variant: 'error',
          autoHideDuration: 2000,
          action,
        }
      );
    }
  }, [hasError]);

  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={handleClick}
      disabled={fetching}
    >
      {fetching ? 'Загрузка...' : 'Тест GraphQL'}
    </Button>
  );
};
