import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import RecipeDetail from './page/recipe-detail';
import Blog from './page/blog';
import BlogPost from './page/blog-post';
import Contact from './page/contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-detail" element={<RecipeDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
