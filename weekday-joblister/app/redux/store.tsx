import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for filter criteria
const initialFilterState = {
  role: [],
  companyName: '',
  location: [],
  keyword: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
    setRole(state, action) {
      state.role = action.payload;
    },
    setCompanyName(state, action) {
      state.companyName = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
  },
});

// Actions
export const { setRole, setCompanyName, setLocation, setKeyword } = filterSlice.actions;

// Redux store
export const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
  },
});
