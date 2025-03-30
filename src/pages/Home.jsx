//Home.jsx
import React, { useEffect, useState } from "react";
import { getBlogs } from "../services/blogService";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Latest Tech News</h2>
      <div className="row">
        {blogs.map((blog, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              {blog.urlToImage && (
                <img src={blog.urlToImage} className="card-img-top" alt={blog.title} />
              )}
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description || "No description available"}</p>
                <a href={blog.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
