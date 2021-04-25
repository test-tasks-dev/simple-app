import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  records: [],
  id: 0,
};

const recordsReducer = createSlice({
  name: 'records',
  initialState,
  reducers: {
    addRecord(state, { payload: record }) {
      const { records: currentRecords } = state;
      state.records = [...currentRecords, record];
    },
    removeRecord(state, action) {
      state.records = state.records.filter((rec, id) => id !== state.id);
    },
    setSelectedId(state, { payload }) {
      state.id = payload;
    }
  }
});

export const {
  reducer: mainReducer,
  actions: {
    addRecord,
    removeRecord,
    setSelectedId,
  },
} = recordsReducer;