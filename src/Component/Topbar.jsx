import '../Style/Header.css';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom';

const Topbar = () => {
    return(
        <>
         <header className="header">
            <div className='atc'>
            <img src="./images/logo.jpeg" alt="" className='logo' />

            <div className="logo">Advance Technologies</div>
            </div>
            <nav>
                <ul>
                    <li> <Link to="/home">Home</Link></li>
                    <li ><Link to="services">Services</Link></li>
                    <li><Link to="about">About Us</Link></li>
                    <li><Link to="portfolio">Portfolio</Link></li>
                    
                    <li><Link to="contact">Contact Us</Link></li>
                </ul>
            </nav>
            <button className="cta-button">Get a Quote</button>
        </header>
        </>

    )
}
export default Topbar;