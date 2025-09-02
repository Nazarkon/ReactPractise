import { createSlice, configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counter';
import authReducer from './auth/auth';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;