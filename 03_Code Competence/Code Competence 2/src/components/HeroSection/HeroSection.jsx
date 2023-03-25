


const HeroSection = () => {

    return (
        <section
            style={{ height: 700, backgroundColor: "#B9C1C4" }}
            className="position-static d-flex flex-row justify-content-between"
        >
            <div className="">
                <img
                    src="./assets/hero.png"
                    alt="img-hero"
                    style={{ width: 600, marginTop: 94, marginLeft: 100 }}
                    className=""
                />
            </div>
            <div className="hero mx-auto" style={{ marginTop: 220 }}>
                <img src="./assets/image 10.svg" />
            </div>
        </section>
    )
}

export default HeroSection