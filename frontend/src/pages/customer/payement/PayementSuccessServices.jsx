import { Link } from "react-router-dom";

const PaymentSuccessServices = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6 text-center">
      <h1 className="text-3xl font-semibold text-green-600 mb-4">
        Merci pour votre paiement !
      </h1>

      <div className="flex gap-4">
        <Link
          to="/customer/"
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition flex items-center justify-center"
        >
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessServices;
