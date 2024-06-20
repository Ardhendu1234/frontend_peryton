import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/products/Products";
import Product from "./pages/products/Product";
import Services from "./pages/services/Services";
import Service from "./pages/services/Service";
import Blogs from "./pages/blogs/Blogs";
import Blog from "./pages/blogs/Blog";
import BlogCategory from "./pages/blogs/BlogCategory";
import BlogAuthor from "./pages/blogs/BlogAuthor";
import BlogDate from "./pages/blogs/BlogDate";
import Demo from "./pages/Demo";
 import Ecommerce from "./pages/ecommerce";
import AdminLogin from "./components/AdminLogin";
import TermsAndConditions from "./pages/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<Service />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route exact path="blog" element={<Blogs />} />
          <Route exact path="blog/:category" element={<BlogCategory />} />
          <Route exact path="blog/:author" element={<BlogAuthor />} />
          <Route exact path="blog/:date" element={<BlogDate />} />
          <Route exact path="blog/:category/:id" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="demo" element={<Demo/>}/>
          <Route path="adminlogin" element={<AdminLogin/>}/>
          <Route path="termsandconditions" element={<TermsAndConditions/>}/>
          <Route path="privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="refundpolicy" element={<RefundPolicy/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
