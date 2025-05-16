import React from "react";


const ProviderCard = () => {
  return (
      <a href="">
        <div className="bg-white rounded-xl shadow-md flex overflow-hidden mt-8 hover:bg-zinc-100 hover:shadow-xl duration-300  w-full md:w-[504px] h-[307px]">
          <img
            src="https://instasize.com/_next/image?url=%2FV169WnBir5QwcI5uGBAp%2Fs%2Fcbb07b87f77d89afe79fe9efea8a900ea91a22fc89e9e91334c4ed3b54621cdc&w=828&q=75"
            alt="Annonce"
            className="w-60 object-cover"
          />
          <div className="p-5 flex flex-col justify-between w-full">
            <div>
              <h2 className="text-lg font-bold mt-2">Jean Tifrice </h2>
              <p className="text-sm text-gray-600 mt-2">Paris</p>
            </div>
            <div className="mt-4 text-sm">
              <p className="underline underline-offset-3 pb-1">Description</p>
              <p>{truncatedDescription}</p>
            </div>

            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <div className="flex flex-col">
                {/* > Profil du presta */}
                Note{" "}
                <a
                  href=""
                  className="font-semibold text-yellow-500 hover:text-amber-900 duration-300"
                >
                  4.2/5
                </a>
              </div>
              <div className="flex flex-col items-end">
                <div>Prochaine disponibilité</div>
                <span className="font-semibold text-yellow-500 flex flex-row">
                  15/04 - 08:00
                </span>
                <div className="flex flex-row-reverse">
                  <a href="" className=" hover:text-amber-400 duration-300">
                    Voir toutes les disponibilités{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
  );
};

export default ProviderCard;
