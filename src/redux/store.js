import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'

import reducers from './reducer'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Auth"]
}

const persistReducers = persistReducer(persistConfig, reducers)
const store = createStore(persistReducers, applyMiddleware(thunk, logger))
const persistor = persistStore(store)

export { store, persistor }