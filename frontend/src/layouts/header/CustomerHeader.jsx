import { Link } from "react-router-dom";

const CustomerHeader = () => {
  return (
    <header>
      <nav className="p-6 px-20 bg-white font-[Poppins] flex items-center justify-between relative">

        <a href=""><img src="ecodeli-logo.png" alt="logo" className="h-10" /></a>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex flex-row gap-10 items-center">
            <li tabIndex="0" className="flex items-center gap-3 text-base text-gray-600 hover:text-black cursor-pointer transition focus:font-semibold focus:text-black">
              <img src="delivery-icon.png" alt="livraison" className="h-8" />
              Livraison
            </li>
            <li tabIndex="0" className="flex items-center gap-3 text-base text-gray-600 hover:text-black cursor-pointer transition focus:font-semibold focus:text-black">
              <img src="services-icon.png" alt="services" className="h-8" />
              Services
            </li>
            <li tabIndex="0" className="flex items-center gap-3 text-base text-gray-600 hover:text-black cursor-pointer transition focus:font-semibold focus:text-black">
              <img src="transport-icon.png" alt="transport" className="h-8" />
              Transport
            </li>
          </ul>
        </div>

        <div className="flex flex-row items-center gap-6">

          <details className="relative group">
            <summary className="list-none cursor-pointer flex items-center">
             <h3 tabIndex={0} className="text-gray-500 hover:text-black hover:bg-gray-300 p-2 shadow-2xl bg-gray-100 rounded-3xl duration-500">Pro</h3>
            </summary>
            <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
              <li className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Devenir Livreur</li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Devenir Prestataire</li>
            </ul>
          </details>

          <details className="relative group">
            <summary className="list-none cursor-pointer flex items-center ml-5">
              <svg className="stroke-gray-600 group-hover:stroke-black h-6 transition" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" strokeWidth="2" d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8" />
              </svg>
            </summary>
            <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
              <li className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Français</li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">English</li>
            </ul>
          </details>

          <details className="relative group">
            <summary className="list-none cursor-pointer flex items-center">
              <svg className="stroke-gray-600 group-hover:stroke-black h-7 transition" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
              <li className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Mon Profile</li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Paramètres</li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">Déconnexion</li>
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
};

export default CustomerHeader;
