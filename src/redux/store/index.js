// import {applyMiddleware, createStore, compose} from 'redux';
// import {persistStore} from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
// import {createSlice} from '@reduxjs/toolkit';
// import rootReducer from './reducers';
// import sagas from './sagas';
// import {logger} from 'redux-logger';
// import {persistReducer} from 'redux-persist';

// import rootSaga from '../saga';

// const ConfigureStore = () => {
//   let composeEnhancers = compose;
//   if (__DEV__) {
//     composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   }
//   const sagaMiddleware = createSagaMiddleware();
//   const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(sagaMiddleware)),
//   );
//   const persistor = persistStore(store);

//   sagaMiddleware.run(sagas);

//   return {
//     persistor,
//     store,
//   };
// };

// export default ConfigureStore;
