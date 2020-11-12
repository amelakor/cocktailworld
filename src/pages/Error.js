import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>Opps! The page cannot be found</h1>
        <Link to="/">
          <burron className="btn btn-primary">back to Home?</burron>
        </Link>
      </div>
    </section>
  );
};

export default Error;
