import PackagesItem from "../../elements/PackagesItem/PackagesItem"




const Packages = () => {

    return (
        <section id="packages-section">
            <h2 className="section-header" style={{ marginTop: 120 }}>
                OUR SPECIAL PACKAGES
            </h2>
            <div className="container packages">
                <div className="row">
                    <div className="col packages-item-1 me-3 mb-3">
                        <PackagesItem
                            title="3 NEGARA"
                            subtitle="Malaysia, Singapura, Thailand"
                            price="4,66 JT"
                        />
                    </div>
                    <div className="col packages-item-2 me-3 mb-3">
                        <h2>JEPANG</h2>
                        <p>Start from IDR</p>
                        <h2>11,6 JT</h2>
                        <PackagesItem
                            title="Jepang"
                            price="11,6 JT"
                        />
                    </div>
                    <div className="col packages-item-3 mb-3">
                        <PackagesItem
                            title="KOREA"
                            subtitle="SELATAN"
                            price="13,9 JT"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col packages-item-4 me-3">
                        <PackagesItem
                            title="TURKI"
                            price="13,9 JT"
                        />
                    </div>
                    <div className="col packages-item-5 me-3">
                        <PackagesItem
                            title="EROPA"
                            price="19,9 JT"
                        />
                    </div>
                    <div className="col packages-item-6">
                        <PackagesItem
                            title="UMROH"
                            price="26,9 JT"
                        />
                    </div>
                </div>
            </div>
        </section>

        // <div
        //     id="carouselExampleCaptions"
        //     className="carousel slide"
        //     data-bs-ride="carousel"
        // >
        //     <div className="carousel-indicators">
        //         <button
        //             type="button"
        //             data-bs-target="#carouselExampleCaptions"
        //             data-bs-slide-to={0}
        //             className="active"
        //             aria-current="true"
        //             aria-label="Slide 1"
        //         />
        //         <button
        //             type="button"
        //             data-bs-target="#carouselExampleCaptions"
        //             data-bs-slide-to={1}
        //             aria-label="Slide 2"
        //         />
        //         <button
        //             type="button"
        //             data-bs-target="#carouselExampleCaptions"
        //             data-bs-slide-to={2}
        //             aria-label="Slide 3"
        //         />
        //     </div>
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             <img src="../src/assets/image 3.png" className="d-block w-100" alt="..." />
        //             <div className="carousel-caption d-none d-md-block">
        //                 <h5>First slide label</h5>
        //                 <p>Some representative placeholder content for the first slide.</p>
        //             </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src="../src/assets/image 3.png" className="d-block w-100" alt="..." />
        //             <div className="carousel-caption d-none d-md-block">
        //                 <h5>Second slide label</h5>
        //                 <p>Some representative placeholder content for the second slide.</p>
        //             </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src="../src/assets/image 3.png" className="d-block w-100" alt="..." />
        //             <div className="carousel-caption d-none d-md-block">
        //                 <h5>Third slide label</h5>
        //                 <p>Some representative placeholder content for the third slide.</p>
        //             </div>
        //         </div>
        //     </div>
        //     <button
        //         className="carousel-control-prev"
        //         type="button"
        //         data-bs-target="#carouselExampleCaptions"
        //         data-bs-slide="prev"
        //     >
        //         <span className="carousel-control-prev-icon" aria-hidden="true" />
        //         <span className="visually-hidden">Previous</span>
        //     </button>
        //     <button
        //         className="carousel-control-next"
        //         type="button"
        //         data-bs-target="#carouselExampleCaptions"
        //         data-bs-slide="next"
        //     >
        //         <span className="carousel-control-next-icon" aria-hidden="true" />
        //         <span className="visually-hidden">Next</span>
        //     </button>
        // </div>

    )
}

export default Packages