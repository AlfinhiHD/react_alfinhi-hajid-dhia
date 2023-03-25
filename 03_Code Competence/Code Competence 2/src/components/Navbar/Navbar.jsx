import NavElement from "../../elements/NavElement/NavElement"



const Navbar = () => {

    return (
        <header>
            <nav
                className="navbar navbar-expand-lg"
                style={{ backgroundColor: "#B9C1C4" }}
            >
                <div className="container-fluid">
                    <img
                        className="ms-3 mt-1"
                        src="./assets/logo.svg"
                        style={{ width: 115, height: 55 }}
                    />
                    <div
                        className="collapse navbar-collapse d-flex justify-content-end"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <NavElement
                                href="#about-us-section"
                                label="About Us"
                            />
                            <NavElement
                                href="#services-section"
                                label="Services"
                            />
                            <NavElement
                                href="#packages-section"
                                label="Packages"
                            />
                            <NavElement
                                href="#contact-us-section"
                                label="Contact Us"
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar