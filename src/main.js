import React from 'react';
import { render } from 'react-dom'
import App from './App'
import Hello from '@/components/Hello/Hello'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'


render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      {/* <Hello/> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)