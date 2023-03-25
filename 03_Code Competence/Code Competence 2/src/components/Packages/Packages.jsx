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
    )
}

export default Packages