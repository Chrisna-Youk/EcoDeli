const DelivrerProfile = () => {
  return (
    <div className="bg-white pt-0 min-h-screen flex flex-col items-center w-screen py-10 px-4 mt-7 2xl:ml-30">
      <div className="flex flex-col items-center mt-12">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Photo du livreur"
          className="w-32 h-32 rounded-full object-cover"
        />
        <h3 className="text-2xl font-bold text-gray-800 mt-2">
          Alexandre Rodriguez
        </h3>
        <p className="text-gray-600 mt-1">
          Livraisons effectuées :{" "}
          <span className="font-semibold text-yellow-600">87</span>
        </p>
      </div>
      <div className="mt-25 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-gray-800 mt-2">Avis clients</h3>
        <p className="flex flex-row ml-2 mt-1 text-gray-500">
          Moyenne : 4.8{" "}
          <span className="ml-1">
            <svg
              className="h-6"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                  fill="#ffce31"
                ></path>
              </g>
            </svg>
          </span>
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md ml-55 flex">
        <div className="space-y-4 flex gap-12 flex-wrap items-center">
          {/* Premier avis */}
          <div className="rounded-lg p-4 hover:bg-gray-200 transition">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-800">Camille Durand</span>
              <span className="text-sm text-gray-500">10 mai 2025</span>
            </div>
            <p className="text-gray-700 mb-1">
              Ponctuel et très professionnel. Je recommande !
            </p>
            <div className="text-yellow-500 text-sm flex flex-row items-center">
              <p>5</p>{" "}
              <svg
                className="h-6"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </g>
              </svg>
              <span className="text-gray-300"></span>
            </div>
          </div>

          <div className="rounded-lg p-4 hover:bg-gray-200 transition">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-800">Camille Durand</span>
              <span className="text-sm text-gray-500">10 mai 2025</span>
            </div>
            <p className="text-gray-700 mb-1">
              Ponctuel et très professionnel. Je recommande !
            </p>
            <div className="text-yellow-500 text-sm flex flex-row items-center">
              <p>5</p>{" "}
              <svg
                className="h-6"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </g>
              </svg>
              <span className="text-gray-300"></span>
            </div>
          </div>

          <div className="rounded-lg p-4 hover:bg-gray-200 transition">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-800">Camille Durand</span>
              <span className="text-sm text-gray-500">10 mai 2025</span>
            </div>
            <p className="text-gray-700 mb-1">
              Ponctuel et très professionnel. Je recommande !
            </p>
            <div className="text-yellow-500 text-sm flex flex-row items-center">
              <p>5</p>{" "}
              <svg
                className="h-6"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </g>
              </svg>
              <span className="text-gray-300"></span>
            </div>
          </div>

          <div className="rounded-lg p-4 hover:bg-gray-200 transition">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-800">Camille Durand</span>
              <span className="text-sm text-gray-500">10 mai 2025</span>
            </div>
            <p className="text-gray-700 mb-1">
              Ponctuel et très professionnel. Je recommande !
            </p>
            <div className="text-yellow-500 text-sm flex flex-row items-center">
              <p>5</p>{" "}
              <svg
                className="h-6"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </g>
              </svg>
              <span className="text-gray-300"></span>
            </div>
          </div>

          <div className="rounded-lg p-4 hover:bg-gray-200 transition">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-800">Camille Durand</span>
              <span className="text-sm text-gray-500">10 mai 2025</span>
            </div>
            <p className="text-gray-700 mb-1">
              Ponctuel et très professionnel. Je recommande !
            </p>
            <div className="text-yellow-500 text-sm flex flex-row items-center">
              <p>5</p>{" "}
              <svg
                className="h-6"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </g>
              </svg>
              <span className="text-gray-300"></span>
            </div>
          </div>

          <div className="rounded-lg p-4 hover:bg-gray-200 transition">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-800">Camille Durand</span>
              <span className="text-sm text-gray-500">10 mai 2025</span>
            </div>
            <p className="text-gray-700 mb-1">
              Ponctuel et très professionnel. Je recommande !
            </p>
            <div className="text-yellow-500 text-sm flex flex-row items-center">
              <p>5</p>{" "}
              <svg
                className="h-6"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </g>
              </svg>
              <span className="text-gray-300"></span>
            </div>
          </div>

          <div className="rounded-lg p-4 hover:bg-gray-200 transition">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-800">Camille Durand</span>
              <span className="text-sm text-gray-500">10 mai 2025</span>
            </div>
            <p className="text-gray-700 mb-1">
              Ponctuel et très professionnel. Je recommande !
            </p>
            <div className="text-yellow-500 text-sm flex flex-row items-center">
              <p>5</p>{" "}
              <svg
                className="h-6"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </g>
              </svg>
              <span className="text-gray-300"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelivrerProfile;
