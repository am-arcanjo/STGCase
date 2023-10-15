import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import './style.css';

function Lobby() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]); 

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);

    const predefinedResults = ['Result 1', 'Result 2', 'Result 3']; 
    const filteredResults = predefinedResults.filter(result =>
      result.toLowerCase().includes(text.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div className="lobby">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Procure a Área desejada"
          value={searchText}
          onChange={handleSearch}
        />
        <i className="fa fa-search"></i>
      </div>
      {searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lobby;
