import React from 'react';

const ProviderRequestsPage = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-6 flex flex-col items-center w-screen">
        <div className="p-4 bg-white w-screen mb-8 shadow-md over"></div>
      <div className="w-full max-w-5xl space-y-10">
        <h1 className="text-3xl font-bold text-gray-900 flex gap-5">Demandes de professionnalisation <p className='text-yellow-500'>Prestataire</p></h1>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Nom</th>
                <th className="px-6 py-3 text-left font-semibold">Email</th>
                <th className="px-6 py-3 text-left font-semibold">SIRET</th>
                <th className="px-6 py-3 text-left font-semibold">Pièce d'identité</th>
                <th className="px-6 py-3 text-left font-semibold">Permis de conduire</th>
                <th className="px-6 py-3 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              <tr>
                <td className="px-6 py-4">Alice Martin</td>
                <td className="px-6 py-4">alice.martin@email.com</td>
                <td className="px-6 py-4">84276512300017</td>
                <td className="px-6 py-4">
                  <a
                    href="/uploads/cni_alice.pdf"
                    className="text-yellow-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir CNI
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="/uploads/permis_alice.pdf"
                    className="text-yellow-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir permis
                  </a>
                </td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button className="text-green-600 hover:underline text-sm cursor-pointer">Accepter</button>
                  <button className="text-red-600 hover:underline text-sm cursor-pointer">Refuser</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">Lucas Bernard</td>
                <td className="px-6 py-4">lucas.bernard@email.com</td>
                <td className="px-6 py-4">88192745600029</td>
                <td className="px-6 py-4">
                  <a
                    href="/uploads/cni_lucas.jpg"
                    className="text-yellow-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir CNI
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="/uploads/permis_lucas.jpg"
                    className="text-yellow-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir permis
                  </a>
                </td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button className="text-green-600 hover:underline text-sm cursor-pointer">Accepter</button>
                  <button className="text-red-600 hover:underline text-sm cursor-pointer">Refuser</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ProviderRequestsPage;

