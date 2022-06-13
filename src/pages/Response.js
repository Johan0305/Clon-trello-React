import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../src/components/dashboard/nav/Nav";
import LandingHeaderBrand from "../../src/components/landing/LandingHeaderBrand";

const Response = () => {
  const [resp, setResp] = useState({});
  const name = localStorage.getItem("name");
  const query = window.location.search;
  const res = {};
  query
    .replace("?", "")
    .split("&")
    .forEach((q) => {
      const [key, value] = q.split("=");
      res[key] = value;
    });
  const params = res.ref_payco;
  useEffect(() => {
    axios
      .get(`https://secure.epayco.co/validation/v1/reference/${params}`)
      .then(({ data }) => {
        setResp(data);
        console.log(data.data.x_description);
      });
  }, []);

  return (
    <div>
      <Nav />
      <div className="pageResponse-container">
        <LandingHeaderBrand />
        <h3 className="pageResponse-title">
          Respuesta a tu transacción de ePayco: Compra de Tableros Ilimitados
        </h3>
        <p>
          {name} el estado de tu transacción fue: {resp.title_response}
        </p>
        <p>{resp.text_response}</p>
        <p>
          Tu transacción con facura <strong># Numero de la factura</strong> fue{" "}
          <strong>Aprobada / rechazada</strong> para mayor información
          cominicarse con el proveedor de su tarjeta
        </p>
      </div>
    </div>
  );
};

export default Response;
