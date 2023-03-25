import AboutUs from "../../components/AboutUs/AboutUs"
import ContactUs from "../../components/ContactUs/ContactUs"
import Footer from "../../components/Footer/Footer"
import HeroSection from "../../components/HeroSection/HeroSection"
import Navbar from "../../components/Navbar/Navbar"
import Packages from "../../components/Packages/Packages"
import ServiceOffer from "../../components/ServicesOffer/ServiceOffer"



const ProfilePage = () => {            
    
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <AboutUs/>
            <ServiceOffer/>
            <Packages/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default ProfilePage