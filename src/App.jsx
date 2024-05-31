import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Header from './components/Header/Header'
import SearchPage from './components/SearchPage/SearchPage';

function App() {

  const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);

  return (
    <BrowserRouter>
      <Header setIsSearchBarClicked={setIsSearchBarClicked} />
      <Routes>
        <Route path='/search-page' element={<SearchPage isSearchBarClicked={isSearchBarClicked} setIsSearchBarClicked={setIsSearchBarClicked} />} />
        {/* <Route path='/search-result' element={<SearchResult />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
