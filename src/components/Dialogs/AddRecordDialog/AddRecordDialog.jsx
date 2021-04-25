import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { addRecord } from '../../../redux/reducers/records-reducer';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

export const AddRecordDialog = ({ open, onClose }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleAddRecord = () => {
    if (text.trim() === '') return;
    dispatch(addRecord(text));
    setText('');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
    >
      <DialogTitle>Добавить запись</DialogTitle>
      <DialogContent>
        <TextField
          value={text}
          onChange={handleChangeText}
          autoFocus
          margin="dense"
          id="name"
          label="Добавить"
          type="text"
          fullWidth
        />
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Отмена
          </Button>
          <Button onClick={handleAddRecord} color="primary">
            Оk
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
