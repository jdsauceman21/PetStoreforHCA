import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main className="container text-center py-5">
      <h1>This page does not exist</h1>
      <p>Sorry, the page you are looking for might be under construction or does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go back to home page
      </Link>
    </main>
  );
};

export default ErrorPage;
