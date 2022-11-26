import { Router, Route } from 'electron-router-dom'
import { Blank } from './pages/blank'


export function Routes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Blank />} />
        </>
      }
    />
  )
}