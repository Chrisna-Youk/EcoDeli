import React from "react";

const ProviderPaymentsHistory = () => {
  return (
    <div className="bg-white pt-0 h-screen 2xl:ml-150 py-10 w-screen overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md"></div>
      <div className="bg-white p-6 rounded-2xl shadow-md xl:w-[80vw] md:w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Derniers Encaissements
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Client
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Adresse
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Service
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Montant
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Statut
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="hover:bg-zinc-300">
                <td className="px-4 py-3 text-sm text-gray-800">Calo</td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  31 rue Charles de Gaulle
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">18762</td>
                <td className="px-4 py-3 text-sm text-gray-800">100</td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Payé
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-zinc-300">
                <td className="px-4 py-3 text-sm text-gray-800">Enzo</td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  127 rue Erard
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">18763</td>
                <td className="px-4 py-3 text-sm text-gray-800">120</td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Payé
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md xl:w-[80vw] md:w-full mt-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Derniers Prélèvements
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Montant
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Date
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Motif
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Statut
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="hover:bg-zinc-300">
                <td className="px-4 py-3 text-sm text-gray-800">19,99</td>
                <td className="px-4 py-3 text-sm text-gray-800">25/05/2025</td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  Abonnement EcoDeli Mensuel
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Payé
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-zinc-300">
                <td className="px-4 py-3 text-sm text-gray-800">19,99</td>
                <td className="px-4 py-3 text-sm text-gray-800">25/06/2025</td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  Abonnement EcoDeli Mensuel
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Payé
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProviderPaymentsHistory;
