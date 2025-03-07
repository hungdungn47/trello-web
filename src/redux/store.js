import { configureStore } from "@reduxjs/toolkit"
import { activeBoardReducer } from "./activeBoard/activeBoardSlice"
import { userReducer } from "./user/userSlice"
import { notificationsReducer } from "./notifications/notificationsSlice"

import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { activeCardReducer } from "./activeCard/activeCardSlice"

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user']
}

const reducers = combineReducers({
  activeBoard: activeBoardReducer,
  activeCard: activeCardReducer,
  user: userReducer,
  notifications: notificationsReducer
})

const persistedReducer = persistReducer(rootPersistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
