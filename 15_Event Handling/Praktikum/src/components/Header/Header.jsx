import logo from '../../assets/Bootstrap_logo.svg.png'; // with import


const Header = () => {
    return (
        <div className="container text-center mt-5">
            <img
            style={{ height: 57, width: "71.5px" }}
            src= {logo}
            alt="Hero Logo"
            />
            <div className="container mt-4">
                <h1>Create Product</h1>
                <p>
                    Below is an example form built entirely with Bootstrap’s form controls.
                    Each required form group has a
                    <br />
                    validation state that can be triggered by attempting to submit the form
                    without completing it.
                </p>
            </div>
        </div>
    );
}

export default Header;