const DelivrerHeader = () => {
  return (
    <aside className="h-screen fixed w-72 bg-white shadow-md text-gray-700 flex flex-col p-4 font-[Poppins] text-md border-r border-gray-200">

      <div className="flex justify-center mb-6">
        <svg className="h-15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" 
        fill="#000000">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M425.176 123.4h554.432v424.992H425.176z" fill="#f8e45c">
            </path>
            <path d="M893.832 809.152c47.384 0 85.784-38.392 85.784-85.784V543.624H425.976V241.288l-234.064-0.768L40.92 492.192V723.36c0 47.392 38.392 85.784 85.752 85.784h767.16z" fill="#F6B246"></path>
            <path d="M893.832 809.152c47.384 0 85.784-38.392 85.784-85.784V603.832H40.92V723.36c0 47.392 38.392 85.784 85.752 85.784h767.16z" fill="#ECD4BE"></path>
            <path d="M853.728 824.552c0 56.152-45.504 101.592-101.6 101.592-56.152 0-101.592-45.448-101.592-101.592 0-56.096 45.448-101.6 101.592-101.6 56.088 0 101.6 45.512 101.6 101.6zM379.584 824.552c0 56.152-45.48 101.592-101.6 101.592s-101.6-45.448-101.6-101.592c0-56.096 45.48-101.6 101.6-101.6s101.6 45.512 101.6 101.6z" fill="#005d3b"></path>
            <path d="M264.192 454.568H62.848l109.128-178.736h92.216z" fill="#E09431"></path></g></svg>
      </div>


      <nav className="flex-1 space-y-2 mt-6">
        <a
          href="/delivrer"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
              clipRule="evenodd"
            />
          </svg>
          Dashboard
        </a>

        <details className="group">
          <summary className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer list-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
              clipRule="evenodd"
            />
          </svg>
            Annonces
          </summary>
          <div className="pl-8 mt-2 space-y-1 flex flex-col">
            <a href="/delivrer/DelivrerAnnouncements" className="flex items-center gap-2 py-1 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM11.25 6a.75.75 0 011.5 0v6a.75.75 0 01-1.5 0V6zm0 9a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              Mes annonces
            </a>
            <a href="/delivrer/DelivrerCreateAnnoucements" className="flex items-center gap-2 py-1 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 3a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H6.75zM4.5 6a.75.75 0 000 1.5h15a.75.75 0 000-1.5H4.5zM4.5 9a.75.75 0 000 1.5h15a.75.75 0 000-1.5H4.5zM4.5 12a.75.75 0 000 1.5h15a.75.75 0 000-1.5H4.5z"
                  clipRule="evenodd"
                />
              </svg>
              Créer une annonce
            </a>
          </div>
        </details>

        <details className="group">
          <summary className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer list-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
              clipRule="evenodd"
            />
          </svg>
            Livraisons
          </summary>
          <div className="pl-8 mt-2 space-y-1 flex flex-col">
            <a href="/delivrer/UpComingDeliveries" className="flex items-center gap-2 py-1 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM11.25 6a.75.75 0 011.5 0v6a.75.75 0 01-1.5 0V6zm0 9a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              A venir
            </a>
            <a href="/delivrer/DeliveriesHistory" className="flex items-center gap-2 py-1 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 3a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H6.75zM4.5 6a.75.75 0 000 1.5h15a.75.75 0 000-1.5H4.5zM4.5 9a.75.75 0 000 1.5h15a.75.75 0 000-1.5H4.5zM4.5 12a.75.75 0 000 1.5h15a.75.75 0 000-1.5H4.5z"
                  clipRule="evenodd"
                />
              </svg>
              Passées
            </a>
          </div>
        </details>

        <a
          href="/delivrer/PaymentsHistory"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
              clipRule="evenodd"
            />
          </svg>
          Paiements
        </a>


        <details className="group">
          <summary className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer list-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
              clipRule="evenodd"
            />
          </svg>
            Profil
          </summary>
          <div className="pl-8 mt-2 space-y-1 flex flex-col">
            <a href="/delivrer/profile" className="flex items-center gap-2 py-1 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM11.25 6a.75.75 0 011.5 0v6a.75.75 0 01-1.5 0V6zm0 9a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              Consulter
            </a>
            <a href="/delivrer/account" className="flex items-center gap-2 py-1 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 3a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H6.75zM4.5 6a.75.75 0 000 1.5h15a.75.75 0 000-1.5H4.5zM4.5 9a.75.75 0 000 1.5h15a.75.75 0 000-1.5H4.5zM4.5 12a.75.75 0 000 1.5h15a.75.75 0 000-1.5H4.5z"
                  clipRule="evenodd"
                />
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
  );
};

export default DelivrerHeader;
