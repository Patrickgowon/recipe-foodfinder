import React from 'react';

const SearchFilters = ({ filters, setFilters }) => {
  const dietOptions = [
    'balanced', 'high-protein', 'low-carb', 'low-fat'
  ];

  const healthOptions = [
    'vegetarian', 'vegan', 'gluten-free', 'dairy-free'
  ];

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: (prev[type] || []).includes(value)
        ? prev[type].filter(item => item !== value)
        : [...(prev[type] || []), value]
    }));
  };

  return (
    <div className="search-filters">
      <div className="filter-group">
        <h4>Diet</h4>
        {dietOptions.map(option => (
          <label key={option}>
            <input
              type="checkbox"
              checked={(filters.diet || []).includes(option)}
              onChange={() => handleFilterChange('diet', option)}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h4>Health</h4>
        {healthOptions.map(option => (
          <label key={option}>
            <input
              type="checkbox"
              checked={(filters.health || []).includes(option)}
              onChange={() => handleFilterChange('health', option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SearchFilters;
