import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import { AppProviders } from './context/ContextProvider.jsx';
import Index from './Index.jsx';
import Test from './Test.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AppProviders>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </AppProviders>,
  </StrictMode>,
)