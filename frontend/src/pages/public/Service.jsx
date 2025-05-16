import React from 'react'
import AnnouncementCards from '../../components/AnnouncementCards';

const Service = () => {
  const description = "orem, ipsum dolor sit amet consectetur adipisicing elit. Error aliquid necessitatibus quidem, cumque nulla ratione neque blanditiis! Ut, vero! Soluta, officia voluptates praesentium repudiandae beatae ea autem excepturi eos adipisci."
	const truncatedDescription = description.length > 150 ? description.slice(0, 150) + "..." : description;
  return (
    <div className="bg-white w-screen flex flex-col items-center min-h-screen">
      <h1 className="text-3xl font-bold mt-10 mb-6">Annonces des prestataires</h1>
      <div className="w-full max-w-5xl px-4">

      {/* Search bar */}
      <form class="flex flex-row items-center space-x-2 max-w-xl mx-auto bg-amber-200 p-4 rounded-lg shadow-md">
        <details class="relative shrink-0">
          <summary class="cursor-pointer px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
            Filtrer par type
          </summary>
          <ul class="absolute left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md w-32 z-10">
            <li>
              <button type="button" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Produits d'ailleurs</button>
            </li>
            <li>
              <button type="button" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Service</button>
            </li>
            <li>
              <button type="button" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Babysitting</button>
            </li>
          </ul>
        </details>
        <div class="relative flex-1">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class=" w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-500 hover:ring-amber-500" placeholder="Recherche" required />
          <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-amber-600 hover:bg-amber-800 duration-300 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2">Rechercher</button>
        </div>
      </form>

        {/* Annonce Type */}

        <AnnouncementCards
          path="Chevre_miel" 
          title="Aide à la personne"
          description="Bonsoir"
          user_grade="5.0"
          city="Nice"
          availability="13/06 - 18:00"
          price="30"
          user_name="Claire Fontaine"
          img_card="https://previews.123rf.com/images/decorwithme/decorwithme1710/decorwithme171000190/88434099-personnes-%C3%A2g%C3%A9es-aide-ic%C3%B4ne.jpg"
        />

        <AnnouncementCards
          path="Chevre_miel" 
          title="Produit d'ailleurs"
          description="Fraichement ramené du Japon, date de péremption 20/12/2028"
          user_grade="4.2"
          city="Paris"
          availability="20/10 - 10:00"
          price="60"
          user_name="Louis san"
          img_card="https://i.ebayimg.com/images/g/bxkAAOSwpDVgszu0/s-l1200.jpg"
        />

      </div>
    </div>
  );
};

export default Service
