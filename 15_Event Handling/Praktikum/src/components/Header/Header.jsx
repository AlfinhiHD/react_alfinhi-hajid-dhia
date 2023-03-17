import logo from '../../assets/Bootstrap_logo.svg.png'; // with import
import HeaderBody from '../../elements/HeaderBody/HeaderBody';
import HeaderTitle from '../../elements/HeaderTitle/HeaderTitle';


const Header = () => {

    const article = {
        title: {
          id: "Buat Akun",
          en: "Create Account"
        },
        description: {
          id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
          en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
        }
    };


    return (
        <div className="container text-center mt-5">
            <img
            style={{ height: 57, width: "71.5px" }}
            src= {logo}
            alt="Hero Logo"
            />
            <div className="container mt-4">
                <HeaderTitle 
                    label={article.title.en}
                />
                <HeaderBody
                    label={article.description.en}
                />
            </div>
        </div>
    );
}

export default Header;