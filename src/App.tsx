import { Home } from '@/pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Inscricao } from '@/pages/inscricao'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscricao" element={<Inscricao />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}