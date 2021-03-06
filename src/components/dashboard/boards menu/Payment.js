import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

const handler = window.ePayco.checkout.configure({
  key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
  test: true,
});

const Payment = () => {
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
  function handleClick() {
    const name = ls.get("name");
    const invoice = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
    handler.open({
      external: false,

      //Parametros compra (obligatorio)
      name: "Tableros ilimitados",
      description: "Compra tus tableros ilimitados",
      invoice: `${invoice}`,
      currency: "cop",
      amount: "50000",
      tax_base: "0",
      tax: "0",
      country: "co",
      lang: "es",

      response: `${process.env.REACT_APP_BASE_URL}/response`,

      //Atributos cliente
      name_billing: `${name}`,
      address_billing: "Completar",
      type_doc_billing: "cc",
      mobilephone_billing: "Completar",
      number_doc_billing: "Completar",

      //atributo deshabilitación metodo de pago
      methodsDisable: ["PSE"],
    });
  }

  console.log(`url de respuesta: ${process.env.REACT_APP_BASE_URL}/response`);

  return (
    <button onClick={handleClick} className="paymentButton-boards">
      Pagar Tableros Ilimitados
    </button>
  );
};

export default Payment;
