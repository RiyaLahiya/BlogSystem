import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{blog.title}</h2>
        <p className="card-text">{blog.body.slice(0, 100)}...</p>
        <Link to={`/blog/${blog.id}`} className="btn btn-primary mt-2">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
