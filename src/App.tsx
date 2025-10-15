import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PortfolioPage from "./page/PortfolioPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
