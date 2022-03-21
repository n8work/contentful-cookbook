import { useEffect, useState } from 'react';

function RecipeComponent({ recipe }) {
  const [steps, setSteps] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setSteps(recipe.steps);
    setIngredients(recipe.ingredients);
  }, []);

  function onClickStep(index) {
    recipe.steps[index].complete = !recipe.steps[index].complete;
    setSteps([...recipe.steps]);
  }

  function onClickIngredient(index) {
    recipe.ingredients[index].complete = !recipe.ingredients[index].complete;
    setIngredients([...recipe.ingredients]);
  }

  // Return an empty fragment if the steps haven't been set
  if (!steps) return <></>;

  return (
    <div className="recipe">
      <h2>{recipe.title}</h2>
      <p className="recipe-author">
        by {recipe.author.name.first} {recipe.author.name.last}
      </p>
      <div className="recipe-step-heroimage">
        <img src={recipe.image} alt={recipe.title} />
      </div>

      <ul className="recipe-ingredients-list">
        {recipe.ingredients.map((g, index) => (
          <li
            key={index}
            className={`recipe-ingredient ${g.complete && 'complete'}`}
            onClick={() => onClickIngredient(index)}
          >
            {g.complete && <i className="fas fa-check"></i>}
            <p>{g.text}</p>
          </li>
        ))}
      </ul>
      <ul className="recipe-step-list">
        {steps.map((d, index) => (
          <li
            key={index}
            className="recipe-step"
            onClick={() => onClickStep(index)}
          >
            <div
              className={`recipe-step-number-box ${d.complete && 'complete'}`}
            >
              {!d.complete && <p className="recipe-step-number">{index + 1}</p>}
              {d.complete && <i className="fas fa-check"></i>}
            </div>
            <p className="recipe-step-body">{d.text}</p>
          </li>
        ))}
      </ul>
      {steps.every((d) => d.complete) && (
        <h2 className="enjoy-message">Enjoy your homecooked meal!</h2>
      )}
      <ul className="gallery">
        {recipe.gallery.map((g, index) => (
          <li key={index} className="gallery-item">
            <img src={`${g}`} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeComponent;
