import React from 'react';
import '../Style/Portfolio.css';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2>Our Portfolio</h2>
            <div className="project">
                <h3>Project 1</h3>
                <p>Brief description of project 1.
                <p>
                    Project 1 involved developing a comprehensive web application for a leading e-commerce company. The project utilized modern technologies, including React for the frontend and Node.js with Express for the backend. The application was built to handle high traffic and provide a seamless user experience with features like real-time inventory updates, secure payment processing, and personalized product recommendations. The team implemented a microservices architecture to ensure scalability and flexibility, and the project was delivered successfully, exceeding client expectations and boosting their online sales by 30%.
                </p>


                </p>
            </div>
            <div className="project">
                <h3>Project 2</h3>
                <p>Brief description of project 2.</p>
<p>
    Project 2 was a mobile application development initiative for a healthcare startup, aimed at providing patients with easy access to medical consultations and health records. The application integrated with various healthcare APIs to deliver real-time data synchronization, allowing users to book appointments, chat with healthcare professionals, and receive personalized health tips. Built using React Native for cross-platform compatibility, the app ensured a consistent user experience on both iOS and Android devices. The project was completed ahead of schedule, enabling the client to launch the app at a major healthcare conference, resulting in significant positive feedback and increased user adoption.
</p>

            </div>
            <div className="project">
                <h3>Project 3</h3>
                <p>Brief description of project 3.</p>
                <p>
                    Project 3 involved developing a responsive website for a non-profit organization focused on environmental conservation. The website featured a modern design, easy navigation, and an event calendar. Built using HTML, CSS, and JavaScript, the project included the implementation of a Content Management System (CMS) for managing content and uploading images. The website was optimized for search engines and delivered a significant increase in online engagement, with a 50% boost in website traffic and a 200% increase in donations.
           </p>
            </div>
        </section>
    );
};

export default Portfolio;
