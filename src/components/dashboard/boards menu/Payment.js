const handler = window.ePayco.checkout.configure({
  key: "fb2113a0b20ddf98686628f23bfb30a2",
  test: true,
});

const Payment = () => {
  function handleClick() {
    const name = localStorage.getItem("name");
    handler.open({
      external: false,

      //Parametros compra (obligatorio)
      name: "Tableros ilimitados",
      description: "Con este pago podras crear tableros ilimitadamente",
      invoice: "785236",
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
    <button onClick={handleClick} className="toggle-boards">
      Pagar Tableros Ilimitados
    </button>
  );
};

export default Payment;
