import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    const [name, setName] = useState("mario");

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
        fetch("http://localhost:8000/blogs")
            .then(resp => resp.json())
            .then(data => {
                setBlogs(data);
                console.log(data);
            });
    }, []);

    return (
        <div className="home">
            {blogs && < BlogList blogs={blogs} title={"All blogs"} handleDelete={handleDelete} bookmark={bookmark} />}
        </div>
    );
}

export default Home;