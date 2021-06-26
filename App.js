import React from 'react';
import DashBoard from './src/DashBoard';
import store from './src/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <DashBoard />
    </Provider>
  );
}
