import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <h1>
      This page not found. Error 404. Go <Link to="/">Home</Link>
    </h1>
  );
};

export default NotFoundPage;