import notFoundImg from "../assets/illustrations/404.svg";
import LandingHeaderBrand from "../components/landing/LandingHeaderBrand";

const NotFound = () =>{
    return(
        <div className="notFound">
        <img src={notFoundImg} alt="Error 404" className="notFound-img" loading="lazy"></img>
        <a className="notFound-ref" href='https://www.freepik.es/vectores/error-web'>Vector de error web creado por storyset - www.freepik.es</a>
        <br/>
        <p className="notFound-Paragraph"><strong>Not Found.</strong> Te invitamos a regresar a nuestra Home Page:</p>
        <LandingHeaderBrand />
        </div>
    );
};

export default NotFound;