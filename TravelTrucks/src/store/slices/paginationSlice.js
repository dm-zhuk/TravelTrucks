import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: { page: 1 },
  reducers: {
    increasePageNumber(state, action) {
      state.page += 1;
    },
  },
});

export const { increasePageNumber } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
