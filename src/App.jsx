//App.jsx
// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Countries from "./pages/Countries";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary"; // Create this component


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
