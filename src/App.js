import React from 'react';
import ImageGrid from './components/ImageGrid/ImageGrid'
import SearchBar from './components/SearchBar/SearchBar'
import Header from './components/Header/Header'


import './App.css';



function App() {
  return (
    <div className="App">
          <Header/>
          {/* <SearchBar/> */}
          <ImageGrid/>
    </div>
  );
}

export default App;
