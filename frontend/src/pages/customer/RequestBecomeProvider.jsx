import React from 'react';
import useAuthContext from '../../contexts/auth/useAuthContext';
import { jwtDecode } from 'jwt-decode';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const RequestBecomeProvider = () => {
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
    enabled: !!userId,
  });

  const { data: papers } = useQuery({
    queryKey: ["Papers", userId],
    queryFn: async () => {
      const response = await http.get(`/paper/read/${userId}`);
      return response.data.data;
    },
    enabled: !!userId,
  });

  const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  formData.append("userId", userId);

  try {
    await http.put(`/paper/update/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    alert('Envoyé !');
  } catch (error) {
    console.error(error);
    alert("Erreur lors de l'envoi");
  }
};


  if (
    papers &&
    papers.idCard &&
    papers.pricesDocument &&
    papers.siret &&
    papers.provider_category
    && papers.request_status == 1
  ) {

    return (
       <div className="bg-white min-h-screen py-10 px-4 flex justify-center">
        <div className="w-full max-w-lg bg-gray-50 p-8 rounded-xl shadow-lg text-center">
          <h1 className="text-2xl font-bold text-green-600 mb-4">Requête déjà envoyée</h1>
          <p className="text-gray-700 text-base mb-6">
            Votre demande pour devenir prestataire a déjà été soumise. Nous vous contacterons dès que possible après vérification de vos documents.
          </p>
          <a
            href="../../profile"
            className="inline-block bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            Revenir au profil
          </a>
        </div>
      </div>


    );
  }

  // Formulaire d'envoi
  return (
    <div className="bg-white min-h-screen py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-2xl bg-gray-50 p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Demande pour devenir prestataire</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm text-gray-700 font-medium">Demandeur</label>
            <input
              type="text"
              name="applicantName"
              value={`${profile?.firstName || ''} ${profile?.lastName || ''}`}
              className="w-full border border-gray-300 bg-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500"
              readOnly
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700 font-medium">Numéro de SIRET</label>
            <input
              type="text"
              name="siret"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500"
              placeholder="Ex: 12345678900012"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700 font-medium">Photo de la carte d'identité</label>
            <input
              type="file"
              name="idCard"
              accept="image/*,.pdf"
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700 font-medium">Document des tarifs pratiqués</label>
            <input
              type="file"
              name="pricesDocument"
              accept="image/*,.pdf"
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700 font-medium">Domaine de prestation</label>
            <select
              name="provider_category"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="">-- Sélectionnez un domaine --</option>
              <option value="Jardinage">Jardinage</option>
              <option value="Babysitting">Babysitting</option>
              <option value="Aide à la personne">Aide à la personne</option>
              <option value="Bricolage">Bricolage</option>
            </select>
          </div>

          <input
              type="hidden"
              name="role_requested"
              value="provider"
            />

            <input
              type="hidden"
              name="request_status"
              value="1"
            />

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            Envoyer ma demande
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestBecomeProvider;
