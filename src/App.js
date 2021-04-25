import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import 'bootstrap/scss/bootstrap-grid.scss';
import { Container, Row, Col } from 'react-bootstrap';

import { store } from './redux/store';

import { RecordsList } from './components/RecordsList';
import { Controls } from './components/Controls';
import { TestAsync } from './components/TestAsync';
import { AddRecordDialog } from './components/Dialogs/AddRecordDialog';
import { RemoveRecordDialog } from './components/Dialogs/RemoveRecordDialog';
import { useStyles } from './styles';

export const App = () => {
  const classes = useStyles();
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleOpenRemoveDialog = () => {
    setOpenRemoveDialog(true);
  };

  const handleCloseRemoveDialog = () => {
    setOpenRemoveDialog(false);
  };

  return (
    <Provider store={store}>
      <SnackbarProvider>
        <div className={classes.wrapper}>
          <Container className="d-flex flex-column justify-content-center">
            <Row>
              <RecordsList/>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mb-2">
                <Controls openAddDialog={handleOpenAddDialog} openRemoveDialog={handleOpenRemoveDialog}/>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <TestAsync/>
              </Col>
            </Row>
          </Container>
        </div>
        <AddRecordDialog open={openAddDialog} onClose={handleCloseAddDialog}/>
        <RemoveRecordDialog open={openRemoveDialog} onClose={handleCloseRemoveDialog}/>
      </SnackbarProvider>
    </Provider>
  );
};
