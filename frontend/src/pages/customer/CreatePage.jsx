import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const CreatePageCustomer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen py-16 px-6 bg-white flex flex-col items-center">
      <h1 className="text-2xl md:text-2xl font-bold text-gray-900 mb-10 text-center">
        Quelle type d'annonce souhaitez-vous créer ?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Livraison */}
        <a href="../Customer/CreateDelivery">
          <div className="bg-yellow-500 hover:bg-yellow-600 text-white transition duration-300 rounded-3xl shadow-xl p-10 flex flex-col justify-center items-center text-center hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">🚚 Créer une annonce de Livraison</h3>
            <p className="text-sm opacity-90">Pour envoyer ou recevoir un colis</p>
          </div>
        </a>

        {/* Services */}
        <Link to="/customer/create/service">
          <div className="bg-yellow-500 hover:bg-yellow-600 text-white transition duration-300 rounded-3xl shadow-xl p-10 flex flex-col justify-center items-center text-center hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">🧰 Créer une annonce de Services</h3>
            <p className="text-sm opacity-90">Proposer ou demander un service</p>
          </div>
        </Link>

        {/* Transport */}
        <Link to="/customer/create/transport">
          <div className="bg-yellow-500 hover:bg-yellow-600 text-white transition duration-300 rounded-3xl shadow-xl p-10 flex flex-col justify-center items-center text-center hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">🚗Créer une annonce de Transport"</h3>
            <p className="text-sm opacity-90">Covoiturage ou demande de trajet</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CreatePageCustomer;
