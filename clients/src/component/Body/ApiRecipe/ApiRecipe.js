
import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';


function ApiRecipe() {

  const APP_ID = '2adf7481';
  const APP_KEY = '0b03c5116947f05dd8d12b93d1e6c26e';

  const [recipes, setRecipes] = useState([]);
  const [search , setSearch] = useState("");
  const [query, setQuery] = useState('banana');

  useEffect( () => {
    getRecipes();
    // eslint-disable-next-line
  },[query]);
// eslint-disable-next-line
  

const getRecipes = async () => {
  const respone =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await respone.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch("");
}

  return (
    <div className="App">
    
      <form  onSubmit={getSearch}className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type = "submit">Search</button>
      </form>
      <div className="msg">
      <h3>Search Results for "{query}"</h3>
      </div>
      
      <div className="rec">

      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients}
        source={recipe.recipe.source}
        url={recipe.recipe.url} />
        
      ))}
      </div>
     
    </div>
  );
}

export default ApiRecipe;