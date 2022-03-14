import { useEffect, useState } from 'react';

function RecipeComponent({ recipe }) {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    setSteps(recipe.steps);
  }, []);

  function onClickRecipeStep(index) {
    recipe.steps[index].complete = !recipe.steps[index].complete;
    setSteps([...recipe.steps]);
  }

  // Return an empty fragment if the steps haven't been set
  if (!steps) return <></>;

  return (
    <>
      <h2>{recipe.title}</h2>
      <p className="recipe-author">
        by {recipe.author.name.first} {recipe.author.name.last}
      </p>
      <div className="recipe-step-heroimage">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <ul className="recipe-step-list">
        {steps.map((d, index) => (
          <li
            key={index}
            className="recipe-step"
            onClick={() => onClickRecipeStep(index)}
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
        <h2 class="enjoy-message">Enjoy your homecooked meal!</h2>
      )}
      <ul className="gallery">
        {recipe.gallery.map((g, index) => (
          <li key={index} className="gallery-item">
            <img src={`${g}`} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
}

export default RecipeComponent;
