const handler = window.ePayco.checkout.configure({
  key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
  test: true,
});

const Payment = () => {
  function handleClick() {
    const name = localStorage.getItem("name");
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

      response: "http://localhost:3000/response",

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

  return (
    <button onClick={handleClick} className="paymentButton-boards">
      Pagar Tableros Ilimitados
    </button>
  );
};

export default Payment;
