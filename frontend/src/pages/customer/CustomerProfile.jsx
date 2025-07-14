import React, { useEffect, useState } from 'react';
import CustomerModifyProfileComponent from '../../components/CustomerComponents/CustomerModifyProfileComponent';
import useAuthContext from '../../contexts/auth/useAuthContext';
import { jwtDecode } from 'jwt-decode';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const CustomerProfilePage = () => {
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

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  useEffect(() => {
    if (profile) {
      setFirstname(profile.firstName || '');
      setLastname(profile.lastName || '');
    }
  }, [profile]);

  const handleSave = async () => {
    try {
      await http.put(`/user/update/${userId}`, {
        firstName: firstname,
        lastName: lastname,
      });
      alert('Profil mis à jour !');
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la mise à jour du profil");
    }
  };

  return (
    <CustomerModifyProfileComponent
      avatarUrl={profile?.photo || 'https://img.freepik.com/vecteurs-premium/silhouette-noire-homme-anonyme-point-interrogation-illustration-vectorielle-personne-sexe-masculin-incognito_261737-806.jpg?semt=ais_hybrid&w=740'}
      firstname={firstname}
      lastname={lastname}
      onFirstnameChange={(e) => setFirstname(e.target.value)}
      onLastnameChange={(e) => setLastname(e.target.value)}
      onSave={handleSave}
      deliveryLink="/livreur"
      merchantLink="/commercant"
      providerLink="/prestataire"
      onLogout={() => {
        authContext.logout();
      }}
    />
  );
};

export default CustomerProfilePage;
