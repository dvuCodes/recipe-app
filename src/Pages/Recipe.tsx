import { useParams } from "react-router-dom";
import { Context } from "@/Context/RecipeProvider";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Recipe = () => {
  const params = useParams();
  const { recipes } = useContext(Context);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const getRecipe = recipes.find((recipe) => recipe.id === params.recipeId);

  return (
    <article className="flex flex-col">
      <div className="flex flex-col md:flex-row-reverse md:justify-center p-4 gap-4 shadow-xl">
        <h1 className="text-4xl p-10 font-bold">{getRecipe?.label}</h1>
        <img
          src={getRecipe?.image}
          alt={getRecipe?.label}
          className="max-w-[300px] max-h-[300px] mx-auto"
        />
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="text-2xl">Ingredients</h3>
        <div>
          <ul>
            {getRecipe?.ingredientLines.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <a
          href={getRecipe?.url}
          className=" rounded-xl p-4 mt-auto w-fit border">
          For instructions at{" "}
          <span className="underline">{getRecipe?.source}</span>
        </a>
      </div>
      <button>
        <Link to="../">Back</Link>
      </button>
    </article>
  );
};

export default Recipe;
