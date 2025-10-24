import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './page/home'
import GlobalStyle from './style/globalStyle'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <Home />
  </StrictMode>,
)
