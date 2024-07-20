import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../slices/auth.slice'

function configStore() {
  const store = configureStore({
    reducer: {
      auth: authSlice
    }
  });
  return store;
}

export default configStore;