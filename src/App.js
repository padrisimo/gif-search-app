import React, { useState } from 'react';
import api from './api'

function App() {
  const [query, setQuery] = useState('');

  const handleQuery = e => setQuery(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    await api.search.query(query);
    setQuery('');
  };

  return (
    <div className="App">
      <form>
        <input
          value={query}
          onChange={handleQuery}
          placeholder="First name"
          type="text"
          name="firstName"
          required
        />
        <button type="submit" onClick={handleSubmit} disabled={!query}>
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
