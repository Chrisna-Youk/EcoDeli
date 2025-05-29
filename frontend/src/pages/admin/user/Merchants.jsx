import React from 'react';

const MerchantsManagementPage = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-6 flex flex-col items-center w-screen">
      <div className="p-4 bg-white w-screen mb-8 shadow-md over"></div>
      <div className="w-full max-w-5xl space-y-10">
        <h1 className="text-3xl font-bold text-gray-900">Gestion des commerçants</h1>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Nom</th>
                <th className="px-6 py-3 text-left font-semibold">Email</th>
                <th className="px-6 py-3 text-left font-semibold">Statut</th>
                <th className="px-6 py-3 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              <tr>
                <td className="px-6 py-4">Jean Dupont</td>
                <td className="px-6 py-4">jean.dupont@email.com</td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                    Actif
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button className="text-blue-600 hover:underline text-sm cursor-pointer">Modifier</button>
                  <button className="text-red-600 hover:underline text-sm cursor-pointer">Supprimer</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">Marie Curie</td>
                <td className="px-6 py-4">marie.curie@email.com</td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-medium">
                    Inactif
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button className="text-blue-600 hover:underline text-sm cursor-pointer">Modifier</button>
                  <button className="text-red-600 hover:underline text-sm cursor-pointer">Supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MerchantsManagementPage;
