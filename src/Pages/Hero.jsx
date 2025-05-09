import React from 'react';
import "../Style/Hero.css"

const Hero = () => {
    return (

        <>
        
        <section className="hero">
            <h1>Transforming Ideas into Digital Reality</h1>
            <p>Web Development, Digital Marketing, and More</p>
            <button className="cta-button">Explore Our Services</button>
        </section>

        <div className='tech'>
            <div className='bg-fixed'>
            <h2>What We Do</h2>
            <ul>
                <li>80% of our projects are built using React</li>
                <li>We have worked on 20+ web development projects</li>
                <li>Our projects are 30% faster and 25% more cost-effective</li>
            </ul>
            </div>
            
        </div>

</>
    );
};

export default Hero;
