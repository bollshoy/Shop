import Nav from "@/components/Nav/Nav.jsx"
import { ShopProvider } from "@/hooks/useShop.js"
import "@/style/App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home.jsx"
const App = () => {
  return (
    <ShopProvider>
      <BrowserRouter>
        <div className="bg-bg w-full min-h-screen">
          <div className="container">
            <Nav />
            <Routes>
              <Route element={<Home />} path="/" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
};

export default App;
