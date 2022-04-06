import { useParams } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();

    return (
        <div className="blog-details">
            <h2 className="blog-details-title">Blog title - {id}</h2>
        </div>
    );
}

export default BlogDetails;