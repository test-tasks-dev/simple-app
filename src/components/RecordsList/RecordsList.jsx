import React, { useState, memo, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';

import { List, ListItem, ListItemText } from '@material-ui/core';
import { Col } from 'react-bootstrap';

import { setSelectedId } from '../../redux/reducers/records-reducer';
import { useStyles } from './styles';
import './styles.css';

export const RecordsList = memo(() => {
  const [selectedItem, setSelectedItem] = useState(0);
  const { mainReducer: { records } } = useSelector(state => state);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleListItemClick = (index) => {
    setSelectedItem(index);
    dispatch(setSelectedId(index));
  };

  const renderList = useCallback(() => (
    <List className={classes.list}>
      {
        records.map((item, idx) => (
          <React.Fragment key={idx}>
            <ListItem
              disableRipple={true}
              className={classes.listItem}
              classes={{
                divider: classes.divider,
                selected: classes.selected,
              }}
              component="li"
              selected={selectedItem === idx}
              onClick={() => handleListItemClick(idx)}
              button
              divider={true}
            >
              <ListItemText
                disableTypography={true}
                classes={{
                  root: classes.text
                }}
                primary={item}
              />
            </ListItem>
          </React.Fragment>
        ))
      }
    </List>
  ), [records, selectedItem]);

  return records.length
    ? (renderList())
    :
    <Col className={clsx('d-flex', ' justify-content-center', classes.empty)}>
      Нет записей
    </Col>
});
