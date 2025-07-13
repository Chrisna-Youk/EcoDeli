import React from 'react';

const RequestProviderComponent = ({ papers = [], onEdit, onDelete }) => {
  const providerPapers = papers.filter(
    (paper) => paper.role_requested === 'provider' && paper.request_status == 1
  );

  return (
    <div className="bg-white min-h-screen py-12 px-6 flex flex-col items-center w-screen">
      <div className="p-4 bg-white w-screen mb-8 shadow-md over"></div>
      <div className="w-full max-w-5xl space-y-10">
        <h1 className="text-3xl font-bold text-gray-900 flex gap-5">
          Demandes de professionnalisation{' '}
          <p className="text-yellow-500">Prestataire</p>
        </h1>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Siret</th>
                <th className="px-6 py-3 text-left font-semibold">
                  Pièce d'identité
                </th>
                <th className="px-6 py-3 text-left font-semibold">Tarifs</th>
                <th className="px-6 py-3 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {providerPapers.map((paper) => (
                <tr key={paper.id}>
                  <td className="px-6 py-4">{paper.siret}</td>
                  <td className="px-6 py-4">
                    <a
                      className="text-yellow-500 underline"
                      href={`/admin/request/provider/image/${paper.idCard}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le document
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      className="text-yellow-500 underline"
                      href={`/admin/request/provider/image/${paper.pricesDocument}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le document
                    </a>
                  </td>
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <button
                      className="text-blue-600 hover:underline text-sm cursor-pointer"
                      onClick={() => onEdit && onEdit(paper)}
                    >
                      Accepter
                    </button>
                    <button
                      className="text-red-600 hover:underline text-sm cursor-pointer"
                      onClick={() => onDelete && onDelete(paper)}
                    >
                      Refuser
                    </button>
                  </td>
                </tr>
              ))}
              {providerPapers.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                    Pas de demande de prestataire.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestProviderComponent;
