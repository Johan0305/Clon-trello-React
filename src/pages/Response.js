import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../src/components/dashboard/nav/Nav";
import LandingHeaderBrand from "../../src/components/landing/LandingHeaderBrand";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

const Response = () => {
  ls.config.encrypt = true;
  ls.config.secret = "secret-string";

  ls.config.encrypter = (data, secret) =>
    AES.encrypt(JSON.stringify(data), secret).toString();

  ls.config.decrypter = (data, secret) => {
    try {
      return JSON.parse(AES.decrypt(data, secret).toString(encUTF8));
    } catch (e) {
      return data;
    }
  };
  const [resp, setResp] = useState({});
  const name = ls.get("name");
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
      });
  }, []);
  let moreData = resp.data;
  return (
    <div>
      <Nav />
      <div className="pageResponse-container">
        <LandingHeaderBrand />
        <h3 className="pageResponse-title">
          {name} el estado de tu transacción fue: {resp.title_response}
        </h3>
        <p>{resp.text_response}</p>
        {moreData ? (
          <>
            <p>
              Respuesta a tu transacción de ePayco: {moreData.x_description}
            </p>
            <p>
              Tu transacción con factura{" "}
              <strong># {moreData.x_id_invoice}</strong> por{" "}
              <strong>{moreData.x_amount} COP </strong>
              fue <strong>{moreData.x_response}</strong> para mayor información
              cominicarse con el proveedor de su tarjeta.
            </p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Response;
