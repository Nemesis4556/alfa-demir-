import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";
import Home from "./pages/Home";
import ServicesIndex from "./pages/ServicesIndex";
import ServicePage from "./pages/ServicePage";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-warm-white overflow-x-hidden">
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmetler" element={<ServicesIndex />} />
          <Route path="/hizmetler/:slug" element={<ServicePage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
