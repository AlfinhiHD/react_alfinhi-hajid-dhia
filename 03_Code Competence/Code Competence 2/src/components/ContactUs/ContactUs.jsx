import ContactForm from "../../elements/ContactForm/ConctactForm"



const ContactUs = () => {

    return (
        <section id="contact-us-section">
            <div className="container contact-us" style={{ marginTop: 90 }}>
                <h2 className="section-header">GET IN TOUCH</h2>
                <div className="row">
                    <div className="col-5 pt-5">
                        <img
                            src="../src/assets/paper-plane.png"
                            style={{ width: 306, height: 323 }}
                        />
                    </div>
                    <div className="col-7">
                       <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs