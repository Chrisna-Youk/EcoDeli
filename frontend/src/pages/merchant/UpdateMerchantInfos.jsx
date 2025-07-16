import React from 'react';
import useAuthContext from '../../contexts/auth/useAuthContext';
import { jwtDecode } from 'jwt-decode';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const UpdateMerchantInfos = () => {
  const authContext = useAuthContext();
  const token = authContext?.auth ? jwtDecode(authContext.auth) : null;
  const userId = token?.id;
  const http = useAuth();

  const { data: profile } = useQuery({
    queryKey: ["Profile", userId],
    queryFn: async () => {
      const response = await http.get(`/user/read/${userId}`);
      return response.data.data;
    },
  });

  const { data: papers } = useQuery({
    queryKey: ["Papers", userId],
    queryFn: async () => {
      const response = await http.get(`/paper/read/${userId}`);
      return response.data.data;
    },
  });

  const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  formData.append("userId", userId);

  try {
    await http.put(`/paper/update/contract/${userId}`, formData);
    alert("Informations mises à jour !");
  } catch (error) {
    console.error(error);
    alert("Erreur lors de la mise à jour");
  }
};

  return (
    <div className="bg-white min-h-screen py-10 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-gray-50 p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Modifier mes informations commerçant</h1>

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Contrat</label>
            <input
              type="file"
              name="contract"
              accept="image/*,.pdf"
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            Mettre à jour mes infos
          </button>
        </form>

        <img className='max-h-100 mt-20' src={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${papers?.contract}`} alt="" />

      </div>
    </div>
  );
};

export default UpdateMerchantInfos;
