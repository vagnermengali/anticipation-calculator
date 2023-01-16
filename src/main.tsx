import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Providers from "./context";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles, ResetCSS } from "./style/global";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <GlobalStyles />
        <ResetCSS />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
)
