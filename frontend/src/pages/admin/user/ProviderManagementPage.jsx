import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ProviderManagementComponent from '../../../components/AdminComponents/ProviderManagementComponent';

const ProviderManagementPage = () => {

 const http = useAuth();

  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await http.get(`/user/read/`);
      return response.data.data;
    },
  });

  const handleEdit = (user) => {
    console.log("Modifier", user);
  };

  const handleDelete = async (user) => {
  const confirmed = window.confirm(`Supprimer ${user.firstName} ${user.lastName} ?`);
  if (!confirmed) return;

  try {
    await http.delete(`/user/delete/${user.id}`);

    alert('Utilisateur supprimé avec succès.');
  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
  }
};


  return (
    <ProviderManagementComponent
      users={users}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

export default ProviderManagementPage;