import React, { useState, memo, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { ListItem, ListItemText, Divider } from '@material-ui/core';
import { Fade } from '@material-ui/core';

import { setSelectedId } from '../../../redux/reducers/records-reducer';
import '../styles.css';

export const RecordsListItem = ({ item, idx }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const dispatch = useDispatch();

  const handleListItemClick = (event, index) => {
    setSelectedItem(index);
    console.log(selectedItem, idx);
    dispatch(setSelectedId(index));
  };

  return (
    <Fade in timeout={3000}>
      <ListItem
        component="li"
        selected={selectedItem === idx}
        onClick={(event) => handleListItemClick(event, idx)}
        button
      >
        <ListItemText primary={item}/>
      </ListItem>
    </Fade>
  );
};
