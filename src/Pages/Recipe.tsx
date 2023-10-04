import { useParams } from "react-router-dom";
import { Context } from "@/Context/RecipeProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Recipe = () => {
  const params = useParams();
  const { recipes } = useContext(Context);

  const getRecipe = recipes.find((recipe) => recipe.id === params.recipeId);

  return (
    <article className="flex flex-col max-w-[650px] mx-auto">
      <div className=" flex flex-col md:flex-row-reverse md:justify-center px-4 py-10 gap-4">
        <img
          src={getRecipe?.image}
          alt={getRecipe?.label}
          className="w-full max-w-lg x-auto object-cover h-60"
        />
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">{getRecipe?.label}</h1>
          <a
            href={getRecipe?.url}
            className=" rounded-xl p-4 w-fit border-white text-xs">
            For instructions at{" "}
            <span className="underline ">{getRecipe?.source}</span>
          </a>
        </div>
      </div>
      <span className="w-full grow h-3 border-t-2"></span>
      <div className="p-4 flex flex-col bg-gray-50">
        <h3 className="text-2xl pb-5">Ingredients</h3>
        <div>
          <ul className="list-disc">
            {getRecipe?.ingredientLines.map((item) => (
              <li className="pl-2 ml-5">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <button>
        <Link to="../">Back</Link>
      </button>
    </article>
  );
};

export default Recipe;
