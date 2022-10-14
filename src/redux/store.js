import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { filtersSlice } from 'redux/filterSlice';
import { contactsReducer } from 'redux/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersSlice.reducer
  },
  middleware (getDefaultMiddleware) { 
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  }
});

export const persistor = persistStore(store);