import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import createSagaReducer from './createSagaReducer'
import persistReducers from './persistReducers'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createSagaReducer(persistReducers(rootReducer), middlewares)
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
