


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
                        <form id="contactForm">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="fname" className="mt-3">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fname"
                                        name="fname"
                                        className="form-control mt-1"
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="lname" className="mt-3">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lname"
                                        name="lname"
                                        className="form-control mt-1"
                                    />
                                </div>
                            </div>
                            <label htmlFor="email" className="mt-4">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="form-control mt-1"
                            />
                            <label htmlFor="message" className="mt-4">
                                Your Question
                            </label>
                            <textarea
                                type="text"
                                id="message"
                                name="message"
                                rows={3}
                                className="form-control md-textarea mt-1"
                                style={{ backgroundColor: "#B9C1C4" }}
                                defaultValue={""}
                            />
                            <button type="submit" className="btnSubmit">
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs