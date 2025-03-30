// BlogDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../services/blogService";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await getBlogById(id);
      setBlog(data);
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="text-center mt-5"><div className="spinner-border"></div></div>;
  if (!blog) return <div className="alert alert-danger text-center mt-5">Blog not found!</div>;

  return (
    <div className="container mt-4">
      <h2>{blog.title}</h2>
      <p className="text-muted">Blog ID: {blog.id}</p>
      <p>{blog.body}</p>
    </div>
  );
};

export default BlogDetails;
