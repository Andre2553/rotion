import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {QueryClientProvider} from '@tanstack/react-query'
import { queryClient } from '../../lib/react-query'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
)
