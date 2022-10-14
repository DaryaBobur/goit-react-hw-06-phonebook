import { createSlice } from '@reduxjs/toolkit'

  const filtersInitialState = {
    filterContacts: ''
  };

  export const filtersSlice = createSlice({
    name: "filter",
    initialState: filtersInitialState,
    reducers: {
      filterName(state, action) {
        state.filterContacts = action.payload;
    },
    },
  });


  export const { filterName } = filtersSlice.actions

