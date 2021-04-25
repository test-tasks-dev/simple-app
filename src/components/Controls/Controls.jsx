import React from 'react';

import { useSelector } from 'react-redux';

import { Button } from '@material-ui/core';
import { useStyles } from './styles';

export const Controls = ({ openAddDialog, openRemoveDialog }) => {
  const classes = useStyles();
  const { mainReducer: { records } } = useSelector(state => state);

  return (
    <>
      <Button
        className={classes.btnAdd}
        onClick={openAddDialog}
        variant="contained"
        color="primary"
      >
        Добавить
      </Button>
      <Button
        onClick={openRemoveDialog}
        variant="contained"
        color="secondary"
        disabled={!Boolean(records.length)}
      >
        Удалить
      </Button>
    </>
  );
};
