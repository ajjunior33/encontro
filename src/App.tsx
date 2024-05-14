import { Home } from '@/pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Inscricao } from '@/pages/inscricao'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscricao" element={<Inscricao />} />
      </Routes>
    </BrowserRouter>
  )
}