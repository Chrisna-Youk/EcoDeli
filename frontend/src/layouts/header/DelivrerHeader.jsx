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
          href="/Dashboard"
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

        <a
          href="/Dashboard/Livraisons"
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
          Livraisons
        </a>

        <a
          href="/Annonces"
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
              d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
              clipRule="evenodd"
            />
          </svg>
          Annonces
        </a>

        <a
          href="/"
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
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
          Users
        </a>

        <a
          href="/products"
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
              d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.115-.26.297-.348a7.55 7.55 0 00.985-.57c.167-.114.334-.126.451-.083l1.02.382a1.875 1.875 0 002.282-.818l.922-1.597a1.875 1.875 0 00-.432-2.385l-.84-.693a.433.433 0 01-.154-.429 7.56 7.56 0 000-1.138c.015-.201.059-.352.153-.43l.84-.692a1.875 1.875 0 00.432-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.117.043-.284.031-.45-.082a7.493 7.493 0 00-.985-.57c-.182-.088-.277-.228-.297-.35l-.178-1.07c-.15-.905-.933-1.567-1.85-1.567h-1.844zM12 15.75a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z"
              clipRule="evenodd"
            />
          </svg>
          Products
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
                d="M12 6a.75.75 0 01.75.75v6.19l2.094-2.095a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.093 2.095v-6.19A.75.75 0 0112 6z"
                clipRule="evenodd"
              />
            </svg>
            Autres
          </summary>
          <div className="pl-8 mt-2 space-y-1 flex flex-col">
            <a href="/" className="flex items-center gap-2 py-1 hover:text-blue-600">
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
              Statistiques
            </a>
            <a href="/" className="flex items-center gap-2 py-1 hover:text-blue-600">
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
              Paramètres
            </a>
            <a href="/" className="flex items-center gap-2 py-1 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9.75 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm-6 3a.75.75 0 00-.75.75v13.5a.75.75 0 00.75.75h12a.75.75 0 00.75-.75V6.75a.75.75 0 00-.75-.75h-12zm1.5 2.25a.75.75 0 010 1.5h-1.5a.75.75 0 010-1.5h1.5zm0 3a.75.75 0 010 1.5h-1.5a.75.75 0 010-1.5h1.5zm0 3a.75.75 0 010 1.5h-1.5a.75.75 0 010-1.5h1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Logs
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
