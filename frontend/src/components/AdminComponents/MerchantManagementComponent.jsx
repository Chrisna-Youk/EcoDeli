import React from 'react';

const MerchantManagementComponent = ({ users = [], onEdit, onDelete }) => {

  const customerUsers = users.filter((user) => user.role === 'merchant');

  return (
    <div className="bg-white min-h-screen py-12 px-6 flex flex-col items-center w-screen">
      <div className="p-4 bg-white w-screen mb-8 shadow-md"></div>
      <div className="w-full max-w-5xl space-y-10">
        <h1 className="text-3xl font-bold text-gray-900 flex gap-3">Gestion des <p className='text-yellow-500'>Commerçants</p></h1>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Nom</th>
                <th className="px-6 py-3 text-left font-semibold">Email</th>
                <th className="px-6 py-3 text-left font-semibold">Rôle</th>
                <th className="px-6 py-3 text-left font-semibold">Statut</th>
                <th className="px-6 py-3 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {customerUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4">{user.firstName} {user.lastName}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4">
                    <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        user.active == 1
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                    >
                        {user.active == 1
                        ? 'Actif' 
                        :'Inactif'
                        }

                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <button
                      className="text-blue-600 hover:underline text-sm cursor-pointer"
                      onClick={() => onEdit && onEdit(user)}
                    >
                      Modifier
                    </button>
                    <button
                      className="text-red-600 hover:underline text-sm cursor-pointer"
                      onClick={() => onDelete && onDelete(user)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
              {customerUsers.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                    Aucun utilisateur avec le rôle "merchant" trouvé.
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

export default MerchantManagementComponent;
