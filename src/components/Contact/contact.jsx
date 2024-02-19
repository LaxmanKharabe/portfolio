import './contact.css';
const Contact = () => {
    return (
        <section className="container w-75 marTop d-flex flexWrap">
            <div className="lft-section">
                <div className="contact-para">
                    <h1 className='hedTxtContact'>Contact</h1>
                    <p>Greetings! I'm currently exploring new opportunities and 
                        would be delighted to discuss potential collaborations. 
                        If you have openings or projects that align with my skills and expertise in frontend development, 
                        I'd love to hear from you.</p>
                    <p>Feel free to reach out for a conversation about how I can contribute to your team or project. 
                        Your consideration is greatly appreciated, and I'm eager to explore the possibilities of working together.</p>
                    <p>Thank you for taking the time to visit my portfolio. I look forward to connecting with you soon.</p>
                </div>
                <div className="links-container">
                    <a href="mailto:laxman31097@gmail.com" className="gmail-icon hoverIcon">
                        <img src="./images/icons/gmail-icon.svg" width="100" height="100" alt="gmail icon" />
                    </a>
                    <a href="mailto:laxman31097@gmail.com" className="insta-icon hoverIcon">
                        <img src="./images/icons/insta-icon.svg" width="100" height="100" alt="insta icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/laxman-kharabe-linkdin" width="100" height="100" className="linnkdin-icon hoverIcon">
                        <img src="./images/icons/linkdin-icon.svg" width="100" height="100" alt="linkdin icon" />
                    </a>
                </div>
            </div>
            <div className="rft-section">
                <img src="./images/contact-img.svg" width="100" height="100" alt="caontact image" />
            </div>
        </section>
    )
}
export default Contact;