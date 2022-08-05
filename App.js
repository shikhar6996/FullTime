import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigator from './src/navigation';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist';
// import {configureStore} from '@reduxjs/toolkit';
// import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {useSelector, useDispatch} from 'react-redux';
// import {TypedUseSelectorHook} from 'react-redux';
// import {createStore} from 'redux';
// import {persistStore, persistReducer} from 'redux-persist';
// const {store, persistor} = configureStore({reducer: {}});
// const store = configureStore({
//   reducer: {
//     posts: postsReducer,
//     comments: commentsReducer,
//     users: usersReducer
//   }
// })

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigator />
    </SafeAreaView>
  );
};

export default App;
