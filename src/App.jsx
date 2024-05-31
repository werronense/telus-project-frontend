import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        {/* optional Home Page: to delete if not used */}
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='/' element={<Search />} /> */}
        {/* <Route path='/survey' element={<Survery />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
