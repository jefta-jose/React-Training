import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import NewBlog from './pages/NewBlog';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />  {/* localhost:5173/ */}
        <Route path='/blogs'>  {/* localhost:5173/blogs */}
          <Route index element={<Blogs />} />
          <Route path=":id" element={<Blog />} />
          <Route path="new" element={<NewBlog />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
