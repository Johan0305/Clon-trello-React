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
  const [loading, setLoading] = useState(false);
  const name = ls.get("name");
  const premium = { premium: true };
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

  const getInformation = async () => {
    try {
      const dataTransaction = await axios.get(
        `https://secure.epayco.co/validation/v1/reference/${params}`
      );
      setResp(dataTransaction);
      ls.remove("premium");
      ls.set("premium", dataTransaction.data.success);
      console.log(ls.get("premium"));
      const user = await axios.get(
        `${process.env.REACT_APP_URL_BACK}/users/myuser`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(user);
      try {
        await axios.put(
          `${process.env.REACT_APP_URL_BACK}/users/myuser`,
          { ...user.data.data, premium: dataTransaction.data.success },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log("no se pudo traer la información");
    }
  };

  useEffect(() => {
    setLoading(true);
    getInformation();
    setLoading(false);
  }, []);

  let moreData = resp.data?.data;

  if (loading === true) {
    return <h1>Cargando info...</h1>;
  } else {
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
                fue <strong>{moreData.x_response}</strong> para mayor
                información cominicarse con el proveedor de su tarjeta.
              </p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
};

export default Response;
