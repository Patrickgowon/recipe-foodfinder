import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('Vegetarian');
  const [searchMode, setSearchMode] = useState('category'); // 'category' or 'search'

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);
    
    try {
      let url;
      if (searchMode === 'category') {
        url =  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchQuery)}`;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response failed');

      const data = await response.json();
      
      if (!data.meals) {
        setError(`No ${searchMode === 'category' ? category : 'matching'} recipes found.`);
        setRecipes([]);
        return;
      }

      // Fetch details for each recipe
      const recipesWithDetails = await Promise.all(
        data.meals.slice(0, 12).map(async (meal) => {
          const detailResponse = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
          );
          const detailData = await detailResponse.json();
          return {
            ...meal,
            instructions: detailData.meals[0]?.strInstructions || '',
            ingredients: getIngredients(detailData.meals[0])
          };
        })
      );

      setRecipes(recipesWithDetails);
    } catch (err) {
      setError('Failed to load recipes. Please try again later.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to extract ingredients
  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push({
          ingredient: meal[`strIngredient${i}`],
          measure: meal[`strMeasure${i}`]
        });
      }
    }
    return ingredients;
  };

  useEffect(() => {
    if (category || searchQuery) {
      fetchRecipes();
    }
  }, [category, searchQuery, searchMode]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchMode('search');
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setSearchMode('category');
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onSearch={handleSearch}
                  onCategorySelect={handleCategorySelect}
                  currentCategory={category}
                />
              } 
            />
            <Route 
              path="/search" 
              element={
                <SearchResults 
                  recipes={recipes} 
                  loading={loading}
                  error={error}
                  searchMode={searchMode}
                  searchQuery={searchQuery}
                  category={category}
                />
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;