//import { useState, useEffect } from "react";

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch("http://localhost:8080/blogs");

    return (
        <div className="home">
            {error && <div className="error">{error}</div>}
            {isPending && <div className="loading">Loading....</div>}
            {blogs && < BlogList blogs={blogs} title={"All blogs"} />}
        </div>
    );
}

export default Home;

// const handleDelete = (id) => {
//     const newBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(newBlogs);
// }

// const bookmark = id => {
//     const newColor = blogs.map(blog => {
//         if (blog.id === id) blog.title = blog.title.includes("🔖") ? blog.title : `${blog.title} 🔖`;
//         return blog;
//     })
//     setBlogs(newColor);
// }