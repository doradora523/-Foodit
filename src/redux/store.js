import { configureStore } from '@reduxjs/toolkit';

import { writingSlice } from './slices/writingSlice';
import { selectedCategorySlice } from './slices/selectedCategorySlice';

export const store = configureStore({
  reducer: {
    writing: writingSlice.reducer,
    selectedCategory: selectedCategorySlice.reducer,
  },
});
