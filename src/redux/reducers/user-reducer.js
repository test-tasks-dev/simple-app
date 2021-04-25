import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  fetching: false,
  error: {
    status: false,
    message: '',
  }
}

const getUserReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload: userData }) {
      state.user = userData.data.user;
    },
    fetchingRequest(state, { payload: isFetching }) {
      state.fetching = isFetching;
    },
    hasError(state, { payload: { status, message } }) {
      state.error = { status, message };
    }
  }
});

export const {
  reducer: userReducer,
  actions: {
    setUser,
    fetchingRequest,
    hasError,
  }
} = getUserReducer;
