import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

//
import storage from 'redux/store1';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <Provider store={store}>
  <Provider store={storage}>
    {/* після провайдера */}
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>

  // </React.StrictMode>
);
