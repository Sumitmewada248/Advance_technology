
import "../Style/Contact.css"

const Contact = () => {
    return(
    <>
    <section className="contact">
        <h2>Get in Touch</h2>
        <p>Have any questions or want to discuss a project? Send us a message!</p>
        <form action="https://formspree.io/f/xdoyvqbj" method="POST">
            <label>
                Your Name:
                <input type="text" name="name" required />
            </label>
            <br />
            <label>
                Your Email:
                <input type="email" name="_replyto" required />
            </label>
            <br />
            <label>
                Message:
                <textarea name="message" required></textarea>
            </label>
            <br />
            <button type="submit">Send Message</button>
        </form>
    </section>
    
    
    </>

    )
}
export default Contact