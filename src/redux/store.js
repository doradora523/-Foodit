import { configureStore } from '@reduxjs/toolkit';

import { writingSlice } from './slices/writingSlice';

export const store = configureStore({
  reducer: {
    writing: writingSlice.reducer,
  },
});
