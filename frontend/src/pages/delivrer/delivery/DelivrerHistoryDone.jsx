import { Link } from "react-router-dom";

const DelivrerHistoryDone = () => {
  return (
    <div className="bg-white pt-0 h-screen 2xl:ml-72 py-10 w-full overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md"></div>
      <div className="bg-white p-6 rounded-2xl shadow-md xl:w-[80vw] md:w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Livraisons couverts
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Client
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Adresse de départ
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Adresse d'arrivé
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Date de livraison maximale
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Statut
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="hover:bg-zinc-300">
                <td className="px-4 py-3 text-sm text-gray-800">Calo</td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  31 rue Charles de Gaulle
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  31 rue Charles de Gaulle
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">19/05/2025</td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Livré
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-3">
                  <Link
                    to={`/customer/chat/`}
                    className="text-blue-600 hover:underline text-sm cursor-pointer"
                  >
                    Consulter
                  </Link>
                </td>
                <td className="px-4 py-3 flex gap-3">
                  <Link
                    to={`/customer/chat/`}
                    className="text-red-600 hover:underline text-sm cursor-pointer"
                  >
                    Annuler
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DelivrerHistoryDone;
