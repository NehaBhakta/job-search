import React, { useState } from "react";

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");
  const [queryjob, setQueryjob] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    setQueryjob(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    onSearch(queryjob);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <input
          type="text"
          className="job"
          value={query}
          onChange={handleChange}
          placeholder="Search by job title, company or keywords"
        />
      </div>
      <div className="line"></div>
      <div className="input-box">
        <div className="flex city-box">
          <i class="bi bi-geo-alt"></i>
          <input
            type="text"
            className="city"
            value={queryjob}
            onChange={handleChange}
            placeholder="Province, city, or region"
          />
        </div>
      </div>

      <button type="submit">
        <i class="bi bi-search"></i>
      </button>
    </form>
  );
}

export default SearchBox;
