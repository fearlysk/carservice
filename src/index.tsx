import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import UserStore from './store/UserStore';
import './index.scss';
import App from './App';

export const Context = createContext(null) as any;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={{
        user: new UserStore()
      }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
