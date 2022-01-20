
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipePage from "./pages/RecipePage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/recipes/:id" element={<RecipePage />} />
        <Route path="/" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
