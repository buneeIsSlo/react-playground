import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

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
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            < BlogList blogs={blogs} title={"All blogs"} handleDelete={handleDelete} bookmark={bookmark} />
            <button className="change-name" onClick={() => setName("luigi")}>Change Name</button>
            <p className="name">{name}</p>
        </div>
    );
}

export default Home;