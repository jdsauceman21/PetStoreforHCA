import React from 'react';

const Hero = ({ text, backdrop }) => {
  const backgroundImage = backdrop
    ? `url(${backdrop})`
    : 'url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)';

  return (
    <header className="bg-dark text-light p-5 hero" style={{ backgroundImage }}>
      <h1>{text}</h1>
    </header>
  );
};

export default Hero;
