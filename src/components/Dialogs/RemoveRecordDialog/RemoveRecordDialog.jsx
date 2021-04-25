import React from 'react';

import { useDispatch } from 'react-redux';

import { removeRecord } from '../../../redux/reducers/records-reducer';

import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from '@material-ui/core';

export const RemoveRecordDialog = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const handleClickOk = () => {
    dispatch(removeRecord());
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
    >
      <DialogTitle>
        Удалить запись?
      </DialogTitle>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Нет
        </Button>
        <Button onClick={handleClickOk} color="primary">
          Да
        </Button>
      </DialogActions>
    </Dialog>
  );
};
