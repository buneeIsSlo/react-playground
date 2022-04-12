import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="404">
            <h2 className="not-found">Sorry</h2>
            <p className="message">this page is not available.</p>
            <Link to="/">Back to homepage</Link>
        </div>
    );
}

export default NotFound;