import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch("http://localhost:8080/blogs/" + id);
    const history = useHistory();

    const handleClick = () => {
        fetch("http://localhost:8080/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {/* <h2 className="blog-details-title">Blog title - {id}</h2> */}
            {isPending && <div className="blog__pg-loading">Loading...</div>}
            {error && <div className="blog__pg-error">{error}</div>}
            {blog && (
                <article className="blog__pg-content">
                    <h1 className="blog__pg-title">{blog.title}</h1>
                    <p className="blog__pg-author">{blog.author}</p>
                    <div className="blog__pg-body">{blog.body}</div>
                    <button className="delete" onClick={handleClick}>Delete</button>
                </article>)}
        </div>
    );
}

export default BlogDetails;