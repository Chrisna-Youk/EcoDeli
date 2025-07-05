import React from "react";
import { Link } from "react-router-dom";

const AnnouncementCards = ({
  path,
  title,
  description,
  user_grade,
  city,
  availability,
  img_card,
  price,
  user_name,
}) => {
  const truncatedDescription =
    description?.length > 150 ? description.slice(0, 150) + "..." : description;
  return (
    <Link to={path}>
      <div className="bg-white rounded-xl shadow-md flex overflow-hidden mt-8 hover:bg-zinc-100 hover:shadow-xl duration-300">
        <img
          src={img_card}
          alt="Annonce"
          className="w-60 object-cover"
        />
        <div className="p-5 flex flex-col justify-between w-full">
          <div>
            <p className="text-green-600 font-semibold text-xl">{price} €</p>
            <h2 className="text-lg font-bold mt-2">{title}</h2>
            <p className="text-sm text-gray-600 mt-2">{city}</p> 
          </div>
          <div className='mt-4 text-sm'>
            <p className='underline underline-offset-3 pb-1'>Description</p>
            <p>{truncatedDescription}</p>
          </div>

          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <div>
              {/* > Profil du presta */}
              Par <a href="" className="font-semibold text-yellow-500 hover:text-amber-900 duration-300">{user_name}</a> {/* Récupérer l'entreprise du livreur pro ou son nom */}
              <div className='flex'>
                <p>Note</p>
                <p className='pl-2'>{user_grade}/5</p>
              </div>
            </div>
            <div>
              Prochaine disponibilité <span className="font-semibold text-yellow-500">{availability}</span>
              <div className='flex flex-row-reverse'>
                {/* > Calendrier des disponibilitées du presta */}
                <a href="" className='pl-2 hover:text-amber-400 duration-300'>Voir toutes les disponibilités </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnnouncementCards;
