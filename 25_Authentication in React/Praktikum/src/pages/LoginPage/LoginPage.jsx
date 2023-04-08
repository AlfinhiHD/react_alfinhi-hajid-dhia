import './LoginPage.css'

function LoginPage() {

    return (
        <>
            <section className="vh-100 mt-5">
                <div className="container-fluid h-custom mt-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid"
                                alt="Sample image"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                {/* Email input */}
                                <label className="form-label mb-2" htmlFor="form3Example3">
                                    Email address
                                </label>
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        id="form3Example3"
                                        className="form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                    />
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-3">
                                    <label className="form-label mb-2" htmlFor="form3Example4">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="form3Example4"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                    />
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>
                </div>
            </section>
        </>

    )
}

export default LoginPage