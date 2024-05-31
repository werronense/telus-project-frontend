import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import SearchPage from './components/SearchPage/SearchPage';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* optional Home Page: to delete if not used */}
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<SearchPage />} />
        {/* <Route path='/survey' element={<Survery />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
