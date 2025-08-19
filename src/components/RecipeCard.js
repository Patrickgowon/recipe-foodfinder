import React, { useState } from 'react';


const RecipeCard = ({ recipe }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`recipe-card ${showDetails ? 'expanded' : ''}`}>
      <div className="card-image">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} loading="lazy" />
        <button 
          className="view-btn"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? '▲ Hide Details' : '▼ View Recipe'}
        </button>
      </div>
      
      <div className="card-content">
        <h3>{recipe.strMeal}</h3>
        
        {showDetails && (
          <div className="recipe-details">
            <h4>Ingredients:</h4>
            <ul>
              {(recipe.ingredients || []).map((ing, i) => (
                <li key={i}>
                  {ing.measure} {ing.ingredient}
                </li>
              ))}
            </ul>
            
            <h4>Instructions:</h4>
            <div className="instructions">
              {recipe.instructions
                ?.split('\n')
                .filter(p => p.trim() !== '') // avoid empty paragraphs
                .map((para, i) => (
                  <p key={i}>{para}</p>
              ))}
            </div>
            
            <a 
              href={`https://www.themealdb.com/meal/${recipe.idMeal}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="original-link"
            >
              View Original Recipe
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
