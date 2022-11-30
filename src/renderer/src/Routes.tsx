import { Router, Route } from 'electron-router-dom'
import { Blank } from './pages/blank'
import { Document } from './pages/document'
import Default from './pages/layouts/default'


export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Blank />} />
          <Route path="/document/:id" element={<Document />} />
        </Route>
      }
    />
  )
}