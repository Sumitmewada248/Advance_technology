import React from 'react';
import '../Style/Service.css';

const Services = () => {
    return (
        <section className="services">
            <h2>Our Services</h2>
            <div className="service">
                <img src="./images/tech1.avif" alt="" />
                <h3>Web Development</h3>
                <p>Building responsive and functional websites.</p>
            </div>
            <div className="service">
                <img src="./images/tech4.avif" alt="" />
                <h3>Mobile App Development</h3>
                <h3>Digital Marketing</h3>
                <p>Enhancing your online presence.</p>
            </div>
            <div className="service">
                <img src="./images/tech3.avif" alt="" />
                <h3>SEO Services</h3>
                <h3>Video Production</h3>
                <p>Creating engaging promotional videos.</p>
            </div>
        </section>
    );
};

export default Services;
