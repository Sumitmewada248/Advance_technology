import React from 'react';
import "../Style/Hero.css";

const Hero = () => {
    return (
        <>
              <div className='section3'>
                <div id='web'>
                    <h1 className="elementor-heading-title elementor-size-default two_elementor_element ">
                        Best<br className="two_elementor_element" />
                        <span style={{ color: "#0E91E3" }} className="two_elementor_element">Web Development</span><br />
                        Agency in Bhopal .
                         <p className="decoration-wavy decoration-black two_elementor_element" style={{ color: "#0E91E3",opacity: "10" }}>
                        We are a leading web development agency in Bhopal, specializing in creating custom websites and applications that meet the unique needs of our clients. Our team of experienced developers and designers work closely with you to understand your goals and deliver a product that exceeds your expectations.
                    </p>
                    </h1>
                   
                </div>
                <div className='animate-bounce'> 
                    <img
                    
                        loading="lazy"
                        decoding="async"
                        width="200"
                        height="200"
                        src="https://advancetechnologies.in/wp-content/uploads/2024/07/AD-IMG-1-1.png"
                        alt=""
                        
                        id='img2'
                    />
                </div>


                
            </div>

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

           

             <div className='section4'>
                <div className='container'>
                    <div className='box'>
                        <h2>Why Choose Us?</h2>
                        <p>We have a team of experienced developers who are passionate about building innovative solutions. We are dedicated to delivering high-quality products and services that meet our clients' needs.</p>
                    </div>
                    <div className='box'>
                        <h2>Our Mission</h2>
                        <p>To provide innovative solutions that meet our clients' needs and exceed their expectations. We strive to build long-term relationships with our clients and help them achieve their goals.</p>
                    </div>
                    <div className='box'>
                        <h2>Our Values</h2>
                        <p>We value honesty, integrity, and transparency in all our dealings. We are committed to delivering high-quality products and services and providing excellent customer service.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

