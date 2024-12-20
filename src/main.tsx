import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'
import Product from './components/Product.tsx'
import Students from './components/Students.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Students />
  </StrictMode>,
)
