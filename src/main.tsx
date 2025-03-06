import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
    <>
        <App />
        <Analytics />
        <Toaster
          theme="dark"
          position="bottom-right"
          duration={3000}
          closeButton={true}
        />
    </>
)
