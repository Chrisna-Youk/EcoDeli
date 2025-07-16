import React from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import {jwtDecode} from "jwt-decode";

const AdminUpcomingServices = () => {
  const http = useAuth();

  const { data: orders} = useQuery({
    queryKey: ["Orders"],
    queryFn: async () => {
      const response = await http.get(`/order/read/active`);
      console.log(response);
      return response.data.data;
    },
  });

  return (
    <div className="bg-white pt-0 h-screen py-10 w-full overflow-x-hidden flex items-center flex-col xl:ml-35">
      <div className="p-10 bg-white w-screen mb-8 shadow-md"></div>
      <div className="bg-white p-6 rounded-2xl shadow-md xl:w-[80vw] md:w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Les prestations à venir
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm text-gray-600">Client</th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">Service</th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">Date</th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">Heure</th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">Encaissement</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {orders && orders.length > 0 ? (
                orders.map((order) => {
                  const orderDate = new Date(order.date);
                  return (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 text-sm text-gray-700">
                        <a href={`/customer/profile/${order.customerId}`}>{order.customerfirstName ?? "Utilisateur Inconnu"} {order.customerlastName ?? ""}</a>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">{order.serviceTitle}</td>
                      <td className="px-4 py-2 text-sm text-gray-700">{orderDate.toLocaleDateString()}</td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {orderDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </td>
                       <td className="px-4 py-2 text-sm text-gray-700">{order.price}€</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" className="text-center px-4 py-6 text-gray-500">
                    Aucune prestation à venir.
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

export default AdminUpcomingServices;
