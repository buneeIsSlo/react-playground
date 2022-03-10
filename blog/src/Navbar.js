const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>bunee blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "#fff",
                    backgroundColor: '#f1356d',
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;