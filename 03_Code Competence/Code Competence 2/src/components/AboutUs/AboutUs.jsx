

const AboutUs = () => {

    return (
        <section id="about-us-section">
            <h2 className="section-header" style={{ marginTop: 60 }}>
                ABOUT US
            </h2>
            <div
                className="section-container d-flex flex-row justify-content-center"
                style={{ columnGap: 30 }}
            >
                <div className="about-p" style={{ width: "45%" }}>
                    <p>
                        PT. International Service Organizer (ISO) merupakan perusahaan yang
                        bergerak dalam bidang Biro Perjalanan Wisata luar negeri, umroh, dan
                        haji. PT. ISO berdiri pada tahun 2018 di Yogyakarta.
                    </p>
                    <p>
                        Kami selalu berkomitmen untuk memberikan layanan berkualitas tinggi
                        pada bidang pariwisata, perjalanan, dan perhotelan. Melalui pengalaman
                        dan tenaga profesional yang cukup handal di bidang tour and travel.
                    </p>
                    <p>
                        Kami selalu berkomunikasi berkelanjutan dan memberikan solusi sesuai
                        kebutuhan dan permintaan Anda dengan cara yang efektif tanpa
                        mengorbankan kualitas layanan.
                    </p>
                </div>
                <div
                    className="about-img"
                    style={{
                        backgroundImage: "url(./assets/about.png)",
                        width: "30%",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat"
                    }}
                ></div>
            </div>
        </section>
    )
}

export default AboutUs