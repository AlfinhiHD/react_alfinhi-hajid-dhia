

const Navbar = () => {
    return (
        <header>
            <div className="container-fluid g-0">
                <nav className="navbar bg-white sticky-top shadow row p-2">
                    <div className="col-7 my-auto">
                    <span className="navbar-brand text-dark h1">Simple header</span>
                    </div>
                    <div className="col-5 row justify-content-end">
                    <div className="col-2">
                        <button className="btn btn-primary">Home</button>
                    </div>
                    <div className="col-2">
                        <a className="nav-link" href="#">
                        Features
                        </a>
                    </div>
                    <div className="col-2">
                        <a className="nav-link" href="#">
                        Pricing
                        </a>
                    </div>
                    <div className="col-2">
                        <a className="nav-link" href="#">
                        FAQs
                        </a>
                    </div>
                    <div className="col-2">
                        <a className="nav-link" href="#">
                        About
                        </a>
                    </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;