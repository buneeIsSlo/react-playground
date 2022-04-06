import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete, bookmark }) => {


    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) =>
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2 className="title">{blog.title}</h2>
                        <p className="author">{blog.author}</p>
                        <button className="delete" onClick={() => handleDelete(blog.id)}>Delete</button>
                        <button className="change" onClick={() => bookmark(blog.id)}>Bookmark</button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default BlogList;