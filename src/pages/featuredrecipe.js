import React from "react";


const Featured = () => {
  const recipes = [
    {
      id: 1,
      title: "Grilled Chicken Salad",
      image: "https://source.unsplash.com/300x200/?chicken,salad",
      description: "A healthy mix of grilled chicken, fresh greens, and a light vinaigrette."
    },
    {
      id: 2,
      title: "Spaghetti Carbonara",
      image: "https://source.unsplash.com/300x200/?spaghetti,pasta",
      description: "Creamy Italian pasta with eggs, cheese, pancetta, and pepper."
    },
    {
      id: 3,
      title: "Avocado Toast",
      image: "https://source.unsplash.com/300x200/?avocado,toast",
      description: "Crispy bread topped with smashed avocado, herbs, and a drizzle of olive oil."
    }
  ];

  return (
    <section className="featured-section" id="featured">
      <div className="featured-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="featured-card">
            <img src={recipe.image} alt={recipe.title} />
            <div className="card-content">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button>View Recipe</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
