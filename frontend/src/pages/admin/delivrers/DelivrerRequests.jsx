import React from 'react';
import useAuth from '../../../hooks/useAuth';

import { useQuery } from '@tanstack/react-query';
import RequestDelivrerComponent from '../../../components/AdminComponents/RequestDelivrerComponent';

const DelivrerRequestsPage = () => {
  const http = useAuth();

  const { data: papers = [], isLoading, isError } = useQuery({
    queryKey: ['papers'],
    queryFn: async () => {
      const response = await http.get(`/paper/read/`);
      return response.data.data;
    },
  });

  const handleAccept = async (paper) => {
  try {
    const userId = paper.userId;
    await http.put(`/user/update/${userId}`, { role: "delivrer" });
    await http.put(`/paper/update/${userId}`, { request_status: "0" });

    alert('Utilisateur promu en livreur !');
  } catch (error) {
    console.error(error);
    alert("Erreur lors de l'envoi");
  }
};

  const handleDecline = async (paper) => {
    try {
      const userId = paper.userId; 
      await http.put(`/paper/update/${userId}`, { request_status: "0" });

      alert('Utilisateur refusé en tant que livreur !');
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi");
    }
  };

  return (
    <RequestDelivrerComponent
      papers={papers}
      onEdit={handleAccept}
      onDelete={handleDecline}
    />
  );
};

export default DelivrerRequestsPage;
