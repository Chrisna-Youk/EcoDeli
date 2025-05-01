import React from 'react';

const Users = () => {
  return (
    <div className="h-screen w-[calc(100vw-300px)] flex flex-col items-center justify-start bg-zinc-900 p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Gestion des utilisateurs</h1>
      <div className="w-full max-w-5xl overflow-x-auto shadow-lg rounded-lg mt-6">
        <table className="w-full table-auto text-left bg-zinc-800 rounded-lg">
          <thead className="bg-zinc-700 text-gray-300">
            <tr>
              <th className="px-6 py-4">Users</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-200">
            <tr className="hover:bg-zinc-700">
              <td className="px-6 py-4">calo@gmail.com</td>
              <td className="px-6 py-4">Calo</td>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded mr-2 cursor-pointer">
                  Éditer
                </button>
                <button className="bg-red-600 hover:bg-red-900 text-white font-semibold py-1 px-3 rounded cursor-pointer">
                  Supprimer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
