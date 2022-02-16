import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/MainNav/Nav";
import RecipePage from "./pages/RecipePage";
import SearchPage from "./pages/SearchPage";
import AppCtxProvider from "./context";

function App() {
  const [activeTub, setActiveTub]: [string, (activeTub: string) => void] =
    useState("malt");
  return (
    <AppCtxProvider>
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/:id"
            element={<RecipePage activeTub={"malt"} onActive={setActiveTub} />}
          />
          <Route path="/" element={<SearchPage />} />
          <Route
            path={`/:id/hops`}
            element={<RecipePage activeTub={"hops"} onActive={setActiveTub} />}
          />
          <Route
            path={`/:id/yeast`}
            element={<RecipePage activeTub={"yeast"} onActive={setActiveTub} />}
          />
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
    </AppCtxProvider>
  );
}

export default App;
