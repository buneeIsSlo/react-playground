import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    const bookmark = id => {
        const newColor = blogs.map(blog => {
            if (blog.id === id) blog.title = blog.title.includes("🔖") ? blog.title : `${blog.title} 🔖`;
            return blog;
        })
        setBlogs(newColor);
    }

    useEffect(() => {
        console.log("useEffect ran");
        fetch("http://localhost:8080/blogs")
            .then(resp => {
                if (!resp.ok)
                    throw new Error("Could not fetch :(");
                return resp.json();
            })
            .then(data => {
                setIsPending(false);
                setBlogs(data);
                console.log(data);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
                setBlogs(null);
            })
    }, []);

    return (
        <div className="home">
            {error && <div className="error">{error}</div>}
            {isPending && <div className="loading">Loading....</div>}
            {blogs && < BlogList blogs={blogs} title={"All blogs"} handleDelete={handleDelete} bookmark={bookmark} />}
        </div>
    );
}

export default Home;