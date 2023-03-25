import ServiceItem from "../../elements/ServiceItem/ServiceItem"



const ServiceOffer = () => {

    return (
        <section id="services-section">
            <h2 className="section-header" style={{ marginTop: 100 }}>
                SERVICES WE OFFER
            </h2>
            <div className="container services-list">
                <div className="row" style={{ marginTop: 100 }}>
                    <ServiceItem
                        label="Tour Luar Negeri"
                        desc="Memiliki paket tour luar negeri yang sangat beragam dengan harga dan
                        kualitas terjangkau."
                    />
                    <ServiceItem
                        label="Custom Tour"
                        desc=" Menyediakan tour khusus sesuai permintaan seperti; studi bandign ke
                        luar negeri untuk sekolah dan universitas, study tour atau tour
                        dengan destinasi yang ditentukan oleh peserta."
                    />
                </div>
                <div className="row mt-5">
                    <ServiceItem
                        label="Umroh &amp; Haji+"
                        desc="Melayani para tamu Allah untuk melaksanakan ibadah di tanah suci
                        seperti umroh dan haji+. Umroh yang sudah terjadwal adalah sebulan
                        2x pemberangkatan."
                    />
                    <ServiceItem
                        label="EO &amp; WO"
                        desc="Event Organizer dan Wedding Organizer baik di dalam negeri maupun
                        luar negeri."
                    />
                </div>
            </div>
        </section>
    )
}

export default ServiceOffer