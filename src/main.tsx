import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles, ResetCSS } from "./style/global";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <ResetCSS />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
