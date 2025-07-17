import React from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const AdminPayementsDetails = () => {
  const http = useAuth();

  const { data: orders = [] } = useQuery({
    queryKey: ["Orders"],
    queryFn: async () => {
      const response = await http.get(`/order/read/all/desactive`);
      console.log(response);
      return response.data.data;
    },
  });

  const totalAmount = orders.reduce((sum, order) => sum + (order.price || 0), 0);
  const commission = totalAmount * 0.2;

  return (
    <div className="bg-white pt-0 min-h-screen py-10 w-full overflow-x-hidden flex items-center flex-col xl:ml-35">
      <div className="p-10 bg-white w-screen mb-8 shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 xl:ml-30">Backoffice - Chiffres</h1>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md xl:w-[80vw] md:w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Détails des chiffres des prestations : </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-700">Total généré</h3>
            <p className="text-2xl font-bold text-green-600">{totalAmount.toFixed(2)} €</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-700">Commission (20%)</h3>
            <p className="text-2xl font-bold text-yellow-600">{commission.toFixed(2)} €</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md xl:w-[80vw] md:w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Détails des chiffres des livraisons : </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-700">Total généré</h3>
            <p className="text-2xl font-bold text-green-600">{} €</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-700">Commission (20%)</h3>
            <p className="text-2xl font-bold text-yellow-600">{} €</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPayementsDetails;
