import { useNavigate } from "react-router-dom";

const DelivrerAnnouncementAlreadyDone = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white pt-0 h-full py-10 w-screen overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md">
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-[Poppins] px-4">
          <div className="bg-white p-8 rounded shadow-md max-w-md text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Commande déjà traitée
            </h1>
            <p className="text-gray-700 mb-6">
              Cette annonce a déjà été traitée. Vous ne pouvez plus effectuer
              d’actions sur celle-ci.
            </p>
            <button
              onClick={() => navigate("/delivrer/delivery/todo")}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Retour à mes commandes
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default DelivrerAnnouncementAlreadyDone;
