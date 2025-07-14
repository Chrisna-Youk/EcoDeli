import CustomersHomeCards from "../../../components/CustomerComponents/CustomersHomeCards";

const ListDeliveries = () => {
  return (
    <div className="flex flex-col w-screen mt-10">
      <div className="flex items-center justify-center">
        <div className="flex flex-row mt-2 bg-white rounded-3xl shadow-2xl">
          <input
            type="search"
            name="search"
            placeholder="Rechercher une annonce"
            id="search"
            className="min-w-md bg-white rounded-3xl h-13 indent-6 outline-none hover:bg-gray-100 hover:shadow-md duration-300"
          />
          <input
            type="text"
            placeholder="Départ"
            className="bg-white outline-none indent-6 hover:bg-gray-100 hover:shadow-md duration-300 rounded-3xl"
          />
          <input
            type="text"
            placeholder="Destination"
            className="bg-white outline-none indent-6 hover:bg-gray-100 hover:shadow-md duration-300 rounded-3xl"
          />
          <select
            name="type_delivery"
            id=""
            className="bg-white min-w-20 outline-none text-gray-400 indent-3 hover:bg-gray-100 hover:shadow-md duration-300 rounded-3xl"
          >
            <option value="">Taille</option>
            <option value="" className="text-black">
              Petit
            </option>
            <option value="" className="text-black">
              Moyen
            </option>
            <option value="" className="text-black">
              Large
            </option>
          </select>
          <a
            href=""
            className="ml-12 h-13 w-13 rounded-full flex items-center justify-center outline-nonehover:shadow-md duration-300 bg-yellow-500 hover:bg-yellow-600 hover:scale-105"
          >
            <svg
              className="h-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>{" "}
          </a>
        </div>
      </div>

      <h3 className="mt-12 ml-12 text-lg font-semibold">
        Les dernières offres de livraisons publiées
      </h3>

      <div className="flex flex-row flex-wrap gap-5 p-8">
        <CustomersHomeCards
          image="https://preview.redd.it/23-yamaha-r7-v0-dsk2foyjizud1.jpg?width=1080&crop=smart&auto=webp&s=819cf6fdaa1ff4e67d26e599bfd42460e14acfaf"
          title="Moto · Paris"
          date="20 juil"
          city_start="Paris"
          city_end="Toulouse"
          price="84 €"
          rating="4,9"
        />

        <CustomersHomeCards
          image="https://demarchesadministratives.fr/images/demarches/189/garde_enfant_domicile_nounou.jpg"
          title="Garde d'enfant · Paris"
          date="20 juil"
          price="35 €"
          rating="4,9"
        />
      </div>

      <h3 className="mt-12 ml-12 text-lg font-semibold">
        Offres des livreurs les mieux notées{" "}
      </h3>

      <div className="flex flex-row flex-wrap gap-5 p-8">
        <CustomersHomeCards
          image="https://preview.redd.it/23-yamaha-r7-v0-dsk2foyjizud1.jpg?width=1080&crop=smart&auto=webp&s=819cf6fdaa1ff4e67d26e599bfd42460e14acfaf"
          title="Moto · Paris"
          date="20 juil"
          city_start="Paris"
          city_end="Toulouse"
          price="84 €"
          rating="4,9"
        />

        <CustomersHomeCards
          image="https://www.theparisphotographer.com/wp-content/uploads/2020/02/The-Paris-Photographer-Best-photography-team-in-Paris.jpg"
          title="Photographe Pro · Paris"
          date="20 juil"
          price="20 €"
          rating="4,2"
        />

        <CustomersHomeCards
          image="https://media.istockphoto.com/id/516329534/fr/photo/en-paille.jpg?s=612x612&w=0&k=20&c=AbUPoF0rjp_EbQDt4HneiYtXRozIyb79YTvvpAeJmDg="
          title="Traiteur · Paris"
          date="20 juil"
          price="200 €"
          rating="4,6"
        />

        <CustomersHomeCards
          image="https://www.aufauteuilducoiffeur.fr/img/images/3-original.jpg"
          title="Coiffeur · Paris"
          date="20 juil"
          price="15 €"
          rating="5"
        />

        <CustomersHomeCards
          image="https://i.notretemps.com/2000x1125/smart/2024/04/30/illustration-de-travaux-de-jardinage.jpeg"
          title="Jardinage à Domicile · Paris"
          date="20 juil"
          price="30 €"
          rating="4,8"
        />

        <CustomersHomeCards
          image="https://cdn.prod.website-files.com/6413856d54d41b5f298d5953/67ae1d4b1945f7be580af6a5_65815eec29effcc74349ed64_passageres-covoiturage-nuit.jpeg"
          title="Covoiturage · Paris - Toulouse"
          date="20 juil"
          price="50 €"
          rating="4,9"
        />

        <CustomersHomeCards
          image="https://demarchesadministratives.fr/images/demarches/189/garde_enfant_domicile_nounou.jpg"
          title="Garde d'enfant · Paris"
          date="20 juil"
          price="35 €"
          rating="4,9"
        />
      </div>

      <h3 className="mt-12 ml-12 text-lg font-semibold">
        Autres annonces de livraisons qui pourraient vous plaire
      </h3>

      <div className="flex flex-row flex-wrap gap-5 p-8">
        <CustomersHomeCards
          image="https://preview.redd.it/23-yamaha-r7-v0-dsk2foyjizud1.jpg?width=1080&crop=smart&auto=webp&s=819cf6fdaa1ff4e67d26e599bfd42460e14acfaf"
          title="Moto · Paris"
          date="20 juil"
          city_start="Paris"
          city_end="Toulouse"
          price="84 €"
          rating="4,9"
        />

        <CustomersHomeCards
          image="https://www.theparisphotographer.com/wp-content/uploads/2020/02/The-Paris-Photographer-Best-photography-team-in-Paris.jpg"
          title="Photographe Pro · Paris"
          date="20 juil"
          price="20 €"
          rating="4,2"
        />

        <CustomersHomeCards
          image="https://media.istockphoto.com/id/516329534/fr/photo/en-paille.jpg?s=612x612&w=0&k=20&c=AbUPoF0rjp_EbQDt4HneiYtXRozIyb79YTvvpAeJmDg="
          title="Traiteur · Paris"
          date="20 juil"
          price="200 €"
          rating="4,6"
        />

        <CustomersHomeCards
          image="https://www.aufauteuilducoiffeur.fr/img/images/3-original.jpg"
          title="Coiffeur · Paris"
          date="20 juil"
          price="15 €"
          rating="5"
        />

        <CustomersHomeCards
          image="https://i.notretemps.com/2000x1125/smart/2024/04/30/illustration-de-travaux-de-jardinage.jpeg"
          title="Jardinage à Domicile · Paris"
          date="20 juil"
          price="30 €"
          rating="4,8"
        />

        <CustomersHomeCards
          image="https://cdn.prod.website-files.com/6413856d54d41b5f298d5953/67ae1d4b1945f7be580af6a5_65815eec29effcc74349ed64_passageres-covoiturage-nuit.jpeg"
          title="Covoiturage · Paris - Toulouse"
          date="20 juil"
          price="50 €"
          rating="4,9"
        />

        <CustomersHomeCards
          image="https://demarchesadministratives.fr/images/demarches/189/garde_enfant_domicile_nounou.jpg"
          title="Garde d'enfant · Paris"
          date="20 juil"
          price="35 €"
          rating="4,9"
        />
      </div>
      <div className="flex flex-row items-center justify-center mt-12 mb-20 gap-2">
        <svg
          className="h-4"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>plus-circle</title> <desc>Created with Sketch Beta.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              {" "}
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-464.000000, -1087.000000)"
                fill="#000000"
              >
                {" "}
                <path
                  d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z"
                  id="plus-circle"
                  sketch:type="MSShapeGroup"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <a
          href=""
          className="text-gray-500 hover:text-black focus:font-semibold"
        >
          <h3>Voir toutes les annonces</h3>
        </a>
      </div>
    </div>
  );
};

export default ListDeliveries;
