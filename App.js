import React from 'react';
import MainApp from './src/MainApp';
import store from './src/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
