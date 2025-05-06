const AdminHeader = () => {
  return (
    <>
      <aside className="h-screen md:w-60 max-sm:hidden bg-zinc-800 text-white flex flex-col px-4 py-6 font-medium text-md">
        <div className="flex justify-center mb-6">
          <img src="/ecodeli-logo.png" alt="ecodeli-logo" className="h-13" />
        </div>
        <hr className=""></hr>

        <div className="flex-1 space-y-2 mt-4">
          <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-zinc-700 cursor-pointer font-[Poppins]">
            <a href="/Dashboard">
              <span>Dashboard</span>
            </a>
          </div>
          <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-zinc-700 cursor-pointer font-[Poppins]">
            <a href="Dashboard/Users">
              <span>Admin</span>
            </a>
          </div>
          <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-zinc-700 cursor-pointer font-[Poppins]">
            <a href="/">
              <span>Annonces</span>
            </a>
          </div>
          <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-zinc-700 cursor-pointer font-[Poppins]">
            <a href="/">
              <span>Users</span>
            </a>
          </div>
          <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-zinc-700 cursor-pointer font-[Poppins]">
            <a href="/">
              <span>Products</span>
            </a>
          </div>

          <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-zinc-700 cursor-pointer font-[Poppins]">
            <details>
              <summary className="list-none flex flex-row items-center">
                Autres
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
                <a
                  href="/"
                  className="cursor-pointer px-2 py-1 hover:bg-zinc-800 rounded-md text-sm"
                >
                  Statistiques
                </a>
                <a
                  href="/"
                  className="cursor-pointer px-2 py-1 hover:bg-zinc-800 rounded-md text-sm"
                >
                  Paramètres
                </a>
                <a
                  href="/"
                  className="cursor-pointer px-2 py-1 hover:bg-zinc-800 rounded-md text-sm"
                >
                  Logs
                </a>
              </div>
            </details>
          </div>

          <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-zinc-700 cursor-pointer font-[Poppins]">
            <a href="/products">
              <span>Products</span>
            </a>
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

export default AdminHeader;
