


const Footer = () => {

    return (
        <footer>
            <div className="footer-content">
                <div className="row">
                    <div className="col-5 ms-5 mt-5">
                        <img
                            src="../src/assets/logo.svg"
                            alt="logo ISO"
                            style={{ width: 190, height: 60 }}
                        />
                        <div className="ms-4 mt-3">
                            <p>PT. International Service Organizer</p>
                            <p>
                                Jl. Perumnas Blok D Ruko No. 19
                                <br />
                                Rt. 006 / Rw. 062 Seturan,
                                <br />
                                Condongcatur, Depok,
                                <br />
                                Sleman, Yogyakarta 55283
                            </p>
                        </div>
                    </div>
                    <div className="col-2 me-5 mt-5">
                        <h3>Product</h3>
                        <p>Paket Luar Negeri</p>
                        <p>Umroh</p>
                        <p>Haji+</p>
                        <p>Custom Package</p>
                        <p>EO &amp; WO</p>
                    </div>
                    <div className="col-3 mt-5">
                        <h3>Contact</h3>
                        <p>
                            <i className="fa-sharp fa-solid fa-envelope" /> iso.djaja@gmail.com
                        </p>
                        <p>
                            <i className="fa-sharp fa-solid fa-phone" /> (0274) 489 897
                        </p>
                        <p>
                            <i className="fa-sharp fa-solid fa-phone" /> 0821 3666 1500
                        </p>
                    </div>
                </div>
                <div className="text-center" style={{ marginTop: 140 }}>
                    <p>Copyright 2023 PT. International Service Organizer</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer