import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="recipes/:recipeId" element={<Recipe />} />
      </Route>
    </Routes>
  );
}

export default App;
