import { Link } from "react-router-dom";

const MerchantHeader = () => {
  return (
    <>
      <aside className="sticky top-0 h-screen md:w-60 max-sm:hidden bg-zinc-800 text-white flex flex-col px-4 py-6 font-medium text-md">
        <Link to="/merchant" className="flex justify-center mb-6">
          <img src="/ecodeli-logo.png" alt="ecodeli-logo" className="h-13" />
        </Link>
        <hr className=""></hr>

        <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-zinc-700 cursor-pointer font-[Poppins]">
          <details>
            <summary className="list-none flex flex-row items-center">
              Annonce
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 ml-1"
              >
              <path
                fillRule="evenodd"
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
              </svg>
            </summary>
            <div className="ml-4 mt-2 space-y-1 flex flex-col">
              <Link to="/merchant/CreateDeliveryPageMerchant" className="cursor-pointer px-2 py-1 hover:bg-zinc-800 rounded-md text-sm">
                Ajouter une annonce
              </Link>
              
              <Link to="/merchant/ViewAnnoucement" className="cursor-pointer px-2 py-1 hover:bg-zinc-800 rounded-md text-sm">
                Voir mes annonces
              </Link> 
            </div>
          </details>
        </div>

        <div className="flex-1 space-y-2 mt-4">
          <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-zinc-700 cursor-pointer font-[Poppins]">
            <Link to="/merchant">
              <span>Facturation</span>
            </Link>
          </div>
          <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-zinc-700 cursor-pointer font-[Poppins]">
            <Link to="/merchant">
              <span>Paiement</span>
            </Link>
          </div>
          <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-zinc-700 cursor-pointer font-[Poppins]">
            <Link to="/merchant">
              <span>Contrat</span>
            </Link>
          </div>
          <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-zinc-700 cursor-pointer font-[Poppins]">
            <Link to="/merchant">
              <span>Paramètre</span>
            </Link>
          </div>
        </div>

        <div className="mt-auto px-2 pt-4">
          <button className="w-full bg-red-600 hover:bg-red-900 cursor-pointer text-white py-2 px-4 rounded-md text-sm font-[Poppins] duration-300">
            Déconnexion
          </button>
        </div>
      </aside>
    </>
  );
};

export default MerchantHeader;
