import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = ({ onSearch, onCategorySelect, currentCategory }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  
  // Popular categories with matching icons
  const categories = [
    { name: 'Vegetarian', icon: '🥦' },
    { name: 'Vegan', icon: '🌱' },
    { name: 'Seafood', icon: '🐟' },
    { name: 'Chicken', icon: '🍗' },
    { name: 'Dessert', icon: '🍰' },
    { name: 'Pasta', icon: '🍝' },
    { name: 'Breakfast', icon: '🥞' },
    { name: 'Beef', icon: '🥩' }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
      navigate('/search');
    }
  };

  const handleCategoryClick = (categoryName) => {
    onCategorySelect(categoryName);
    navigate('/search');
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Discover Culinary Delights</h1>
          <p className="hero-subtitle">Explore thousands of recipes curated for your taste</p>
          
          <form onSubmit={handleSearchSubmit} className="search-bar">
            <input 
              type="text" 
              placeholder="Search recipes..." 
              className="search-input"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className="search-button">
              <span className="search-icon">🔍</span>
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <h2 className="section-title">Popular Categories</h2>
        <div className="category-grid">
          {categories.map((cat) => (
            <div 
              key={cat.name}
              className={`category-card ${currentCategory === cat.name ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div className="category-icon">{cat.icon}</div>
              <h3 className="category-name">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Recipes Preview */}
      <section className="trending-recipes">
        <h2 className="section-title">Trending This Week</h2>
        <div className="recipe-preview">
          <div className="preview-card">
            <div className="preview-image vegetarian"></div>
            <h3>Vegetarian Special</h3>
          </div>
          <div className="preview-card">
            <div className="preview-image pasta"></div>
            <h3>Pasta Lovers</h3>
          </div>
          <div className="preview-card">
            <div className="preview-image dessert"></div>
            <h3>Sweet Treats</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;