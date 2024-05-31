import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import SearchPage from './components/SearchPage/SearchPage';
import SearchResult from './components/SearchResult/SearchResult';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/search-result' element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
