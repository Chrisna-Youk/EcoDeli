import { useState } from "react";
import AdminDasboardLogo from '../../assets/images/admin-icon.svg'

const AdminHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 2xl:hidden bg-white p-2 rounded-md shadow-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } 2xl:translate-x-0 transition-transform duration-300 fixed z-40 top-0 left-0 h-full w-72 bg-white shadow-md text-gray-700 flex flex-col p-4 font-[Poppins] text-md border-r border-gray-200`}
      >
        <div className="flex justify-around items-center mb-6">
          <img src={AdminDasboardLogo} alt="Logo" className="h-16" />
          <button className="2xl:hidden" onClick={() => setIsSidebarOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 space-y-2 mt-6">
          <a href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
            </svg>
            Dashboard
          </a>

          <a href="/admin/users" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8zm6 1a4 4 0 00-3 3.87" />
            </svg>
            Utilisateurs
          </a>

          <details className="group">
            <summary className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer list-none">
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A4 4 0 017.5 15h9a4 4 0 012.379.804M12 7a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
              Clients
            </summary>
            <div className="pl-8 mt-2 space-y-1 flex flex-col">
              <a href="/admin/customers" className="py-1 hover:text-yellow-600">Utilisateurs</a>
              <a href="/admin/customers/announcements" className="py-1 hover:text-yellow-600">Annonces</a>
            </div>
          </details>

          <details className="group">
            <summary className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer list-none">
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A4 4 0 017.5 15h9a4 4 0 012.379.804M12 7a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
              Prestataires
            </summary>
            <div className="pl-8 mt-2 space-y-1 flex flex-col">
              <a href="/admin/providers" className="py-1 hover:text-yellow-600">Utilisateurs</a>
              <a href="/admin/providers/annoucements" className="py-1 hover:text-yellow-600">Annonces</a>
              <a href="/admin/request/provider" className="py-1 hover:text-yellow-600">Demandes</a>
            </div>
          </details>

          <details className="group">
            <summary className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer list-none">
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h13v6M5 11V7h3M5 11h13M5 11l-2 2m0-4l2 2" />
              </svg>
              Livreurs
            </summary>
            <div className="pl-8 mt-2 space-y-1 flex flex-col">
              <a href="/admin/delivrers" className="py-1 hover:text-yellow-600">Utilisateurs</a>
              <a href="/delivrer/DeliveriesHistory" className="py-1 hover:text-yellow-600">Livraisons</a>
              <a href="/admin/DelivrersAnnouncements" className="py-1 hover:text-yellow-600">Annonces</a>
              <a href="/admin/request/delivrer" className="py-1 hover:text-yellow-600">Demandes</a>
            </div>
          </details>

          <details className="group">
            <summary className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer list-none">
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3zM9 3v18M15 3v18M3 9h18M3 15h18" />
              </svg>
              Commerçants
            </summary>
            <div className="pl-8 mt-2 space-y-1 flex flex-col">
              <a href="/admin/merchants" className="py-1 hover:text-yellow-600">Utilisateurs</a>
              <a href="/delivrer/DeliveriesHistory" className="py-1 hover:text-yellow-600">Contrats</a>
              <a href="/admin/MerchantRequests" className="py-1 hover:text-yellow-600">Demandes</a>
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

export default AdminHeader;
