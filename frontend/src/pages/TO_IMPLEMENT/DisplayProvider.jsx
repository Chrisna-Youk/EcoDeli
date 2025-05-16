import React from 'react';
import { Link } from 'react-router-dom';
import DisplayCards from '../../components/DisplayCards';

const DisplayProvider = () => {

		return (
				<div className="bg-white w-screen flex flex-col items-center min-h-screen">
					<h1 className="text-3xl font-bold mt-10 mb-6">Nosprestataires</h1>
					<div className="w-full max-w-5xl">
		
						{/* Search bar */}
						<form className="flex flex-row items-center space-x-2 max-w-xl mx-auto bg-amber-200 p-4 rounded-lg shadow-md">
							<details className="relative shrink-0">
								<summary className="cursor-pointer px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
										Filtrer par type
								</summary>
								<ul className="absolute left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md w-32 z-10">
									<li>
									<button type="button" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Produits d'ailleurs</button>
									</li>
									<li>
									<button type="button" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Service</button>
									</li>
									<li>
									<button type="button" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Babysitting</button>
									</li>
								</ul>
							</details>
							<div className="relative flex-1">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
									<svg className=" w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
									</svg>
								</div>
								<input type="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-500 hover:ring-amber-500" placeholder="Recherche" required />
								<button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-amber-600 hover:bg-amber-800 duration-300 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2">Rechercher</button>
							</div>
						</form>
		
						{/* Layout de 2*X */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">

							{/* Profile Type */}
							<DisplayCards 
								path="Jean_Tifrice" 
								displayTitle="Jean Tifrice"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima maxime, dignissimos mollitia aliquid iure dolore? Dolores asperiores omnis atque suscipit ut fugiat, labore ea quaerat? Ad rerum quo repudiandae." 
								user_grade="4.2"
								user_city="Paris"
								availability="15/04 - 08:00"
								img_card="https://instasize.com/_next/image?url=%2FV169WnBir5QwcI5uGBAp%2Fs%2Fcbb07b87f77d89afe79fe9efea8a900ea91a22fc89e9e91334c4ed3b54621cdc&w=828&q=75"
							/>

							<DisplayCards 
								path="Claire_Fontaine" 
								displayTitle="Claire Fontaine"
								description="Bonjour"
								user_grade="4.8"
								user_city="Marseille"
								availability="25/04 - 14:00"
								img_card='https://instasize.com/_next/image?url=%2FV169WnBir5QwcI5uGBAp%2Fs%2Ff9441ab6a2b96b2ae169206a33323f1c337bb6904179bc81fbb8151d7abe5c47&w=828&q=75'
								/>

							<DisplayCards 
								path="Chevre_miel" 
								displayTitle="Chèvre miel"
								description="Bonsoir"
								user_grade="5.0"
								user_city="Nice"
								availability="01/12 - 10:00"
								img_card='https://media.istockphoto.com/id/177369626/fr/photo/dr%C3%B4le-de-ch%C3%A8vre-envoie-sa-languette.jpg?s=612x612&w=0&k=20&c=qi4mhhIVM80vPLFztpO9ki0mO-6YwQXOifq72TyW7Tw='
								/>

						</div>
					</div>
				</div>
			);
		};

export default DisplayProvider