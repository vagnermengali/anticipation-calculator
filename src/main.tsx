import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyles, ResetCSS } from "./style/global";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <ResetCSS />
    <App />
  </React.StrictMode>,
)
