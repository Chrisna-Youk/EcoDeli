import { useState } from "react";

const ProviderHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 2xl:hidden bg-white p-2 rounded-md shadow-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } 2xl:translate-x-0 transition-transform duration-300 fixed z-40 top-0 left-0 h-full w-72 bg-white shadow-md text-gray-700 flex flex-col p-4 font-[Poppins] text-md border-r border-gray-200`}
      >
        <div className="flex justify-around items-center mb-6">
          <button className="2xl:hidden" onClick={() => setIsSidebarOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 space-y-2 mt-6">
          <a href="/delivrer" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 0v6m4 0v-6m0 6h6v6H6v-6h6" />
            </svg>
            Dashboard
          </a>

          <a href="/delivrer/PaymentsHistory" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 7h20M2 11h20m-2 4h-4m6 0a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v8z" />
            </svg>
            Planning
          </a>

          <details className="group">
            <summary className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer list-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v16m0 0H5a2 2 0 01-2-2V6a2 2 0 012-2h11z" />
              </svg>
              Annonces
            </summary>
            <div className="pl-8 mt-2 space-y-1 flex flex-col">
              <a href="/provider/Annoucements" className="flex items-center gap-2 py-1 hover:text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
                </svg>
                Mes annonces
              </a>
              <a href="/provider/CreateAnnouncement" className="flex items-center gap-2 py-1 hover:text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Créer une annonce
              </a>
            </div>
          </details>

          <details className="group">
            <summary className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer list-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m16 0V5a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0H4" />
              </svg>
              Prestation
            </summary>
            <div className="pl-8 mt-2 space-y-1 flex flex-col">
              <a href="/provider/ProvidingUpComing" className="flex items-center gap-2 py-1 hover:text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                A venir
              </a>
              <a href="/provider/ProvidingHistory" className="flex items-center gap-2 py-1 hover:text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Passées
              </a>
            </div>
          </details>

          <a href="/provider/Payements" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 7h20M2 11h20m-2 4h-4m6 0a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v8z" />
            </svg>
            Paiements
          </a>

          <details className="group">
            <summary className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer list-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a6 6 0 100-12 6 6 0 000 12zM4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
              </svg>
              Profil
            </summary>
            <div className="pl-8 mt-2 space-y-1 flex flex-col">
              <a href="/delivrer/profile" className="flex items-center gap-2 py-1 hover:text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
                </svg>
                Consulter
              </a>
              <a href="/delivrer/account" className="flex items-center gap-2 py-1 hover:text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5h10M11 5v14m0-14L3 19" />
                </svg>
                Modifier
              </a>
            </div>
          </details>
        </nav>
         <div className="mt-auto px-2 pt-4">
        <button className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-800 cursor-pointer text-white py-2 px-4 rounded-md text-sm transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          Déconnexion
        </button>
      </div>
      </aside>
    </>
  );
};

export default ProviderHeader;
