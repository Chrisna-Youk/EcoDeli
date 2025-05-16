import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCards = ({path, displayTitle, description, user_grade, user_city, availability, img_card}) => {
	const truncatedDescription = description.length > 150 ? description.slice(0, 150) + "..." : description;
    return (
      <Link to={path}>
        <div className="bg-white rounded-xl shadow-md flex overflow-hidden mt-8 hover:bg-zinc-100 hover:shadow-xl duration-300  w-full md:w-[504px] h-[307px]">
            <img
            src={img_card}
            className="w-60 object-cover"
            />
            <div className="p-5 flex flex-col justify-between w-full">
							<div>
								<h2 className="text-lg font-bold mt-2">{displayTitle}</h2>
								<p className="text-sm text-gray-600 mt-2">{user_city}</p> 
							</div>
							<div className='mt-4 text-sm'>
								<p className='underline underline-offset-3 pb-1'>Description</p>
								<p>{truncatedDescription}</p>
							</div>
                <div className="mt-4 flex justify-between text-sm text-gray-500">
									<div className='flex flex-col'>
										{/* > Profil du presta */}
										Note <Link to="" className="font-semibold text-yellow-500 hover:text-amber-900 duration-300">{user_grade}/5</Link> 
									</div>
									<div className='flex flex-col items-end'>
										<div>Prochaine disponibilité</div>
										<span className="font-semibold text-yellow-500 hover:text-amber-900 duration-300 flex flex-row">{availability}</span>
										<div className='flex flex-row-reverse'>
											<Link to="" className=' hover:text-amber-400 duration-300'>Voir toutes les disponibilités </Link>
										</div>
									</div>
              </div>
            </div>
        </div>
    	</Link>
    );
}

export default DisplayCards;