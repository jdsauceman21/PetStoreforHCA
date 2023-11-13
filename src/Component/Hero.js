const Hero = ({text,backdrop}) => {
    
    if(backdrop){

        return (
            <>
                <header className="bg-dark text-light p-5 hero" style={{backgroundImage:`linear-gradient(186deg, rgba(241,241,241,1) 0%, rgba(0,0,0,0.4206057422969187) 62%, rgba(15,15,15,0.39539565826330536) 100%, rgba(0,0,0,1) 100%), url(${backdrop})`}}>
                    <h1>{text}</h1>
                    </header>
            </>
        );
    }
    return (
        <>
          <header className="bg-dark text-light p-5 hero" style={{backgroundImage:`url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}}>
            <h1 className="hero-text">{text}</h1>
    
          </header>
        </>
      );
};

export default Hero;