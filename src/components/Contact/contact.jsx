import './contact.css';
const Contact = () => {
    return (
        <section className="container w-75 d-flex flexWrap" style={{marginTop: "65px"}}>
            <div className="lft-section">
                <div className="contact-para">
                    <h1 className='hedTxtContact'>Contact</h1>
                    <p>I'm currently looking for frontend internships at startups. Have an opening? Please reach out to me.</p>
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