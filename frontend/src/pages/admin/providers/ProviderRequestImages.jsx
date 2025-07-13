import React from 'react';
import { useParams } from 'react-router-dom';

const ProviderRequestImages = () => {
  const { image } = useParams();

  return (
    <div className='flex justify-center items-center bg-white w-screen h-screen flex-col'>
      <img
        src={`${import.meta.env.VITE_BASE_URL_STATIC}uploads/files/${image}`} 
        alt="Document du prestataire"
        className='h-150'
      />
      <a
            href="../"
            className="inline-block bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-300 mt-20"
          >
            Retour
          </a>
    </div>
  );
};

export default ProviderRequestImages;
