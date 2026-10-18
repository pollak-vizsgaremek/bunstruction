import { Route, Routes } from "react-router";
import MainNavigation from "./components/MainNavigation";
import MenuPage from "./pages/MenuPage";
import BuilderPage from "./pages/BuilderPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
