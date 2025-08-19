import React from 'react';
import RecipeCard from '../components/RecipeCard';

const SearchResults = ({ recipes = [], loading, error, searchMode = 'search', searchQuery = '', category = '' }) => {
  return (
    <div className="search-results">
      {loading ? (
        <div className="loading-spinner"></div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <>
          <h2 className="results-title">
            {searchMode === 'category'
              ? `Our ${category} Collection`
              : `Search Results for "${searchQuery}"`}
          </h2>
          <div className="recipe-grid">
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
              ))
            ) : (
              <p className="no-results">No recipes found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
