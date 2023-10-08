import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";
import SavedRecipes from "./Pages/SavedRecipes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="recipes/:recipeId" element={<Recipe />} />
        <Route path="favorites" element={<SavedRecipes />} />
      </Route>
    </Routes>
  );
}

export default App;
