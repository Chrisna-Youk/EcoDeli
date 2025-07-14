import { Link } from "react-router-dom";

const ComponentDeliveryDetailsPage = ({
  image,
  title,
  price,
  description,
  cityDeparture,
  cityDestination,
  name_delivrer,
  lastname_delivrer,
  status_delivrer,
  photo_delivrer,
}) => (
  <div className="min-h-screen w-screen px-4 py-6 flex flex-col lg:flex-row lg:justify-around font-[Poppins] lg:px-20 mt-10 xl:ml-35">
    <div className="w-full lg:w-1/2 lg:max-w-[800px]">
      <h2 className="font-semibold text-3xl mb-4">{title}</h2>

      <img
        className="w-full max-h-[50vh] object-cover rounded-md"
        src={image}
        alt="Annonce"
      />

      <div className="flex justify-between mt-3 px-1">
        <span className="text-lg font-medium text-green-600">
          <span className="text-md text-gray-600 italic">Prix : </span>
          {price}€
        </span>
        <span className="text-md text-gray-600 italic">{cityDeparture}</span>
        <span className="text-md text-gray-600 italic">à</span>
        <span className="text-md text-gray-600 italic">{cityDestination}</span>
      </div>
    </div>

    <div className="w-full lg:w-[400px] lg:mt-10 bg-white rounded-md shadow-2xl flex flex-col h-auto lg:h-[50vh]">
      <div className="w-full h-24 px-5 flex items-center justify-between rounded-t-md bg-gray-100">
        <div>
          <h2 className="font-semibold text-lg">
            {name_delivrer} {lastname_delivrer}
          </h2>
          <h3 className="text-sm text-gray-600">{status_delivrer}</h3>
        </div>
        <img
          src={photo_delivrer}
          alt="Avatar utilisateur"
          className="w-16 h-16 rounded-full object-cover shadow"
        />
      </div>

      <div className="flex-1 p-5 overflow-y-auto">
        <p className="text-sm text-gray-800 mb-4">Description de l'annonce</p>
        <p>{description}</p>
      </div>

      <div className="w-full px-4 pb-4 flex flex-col gap-3">
        <Link
          to={``}
          className="w-full bg-yellow-400 text-center py-3 transition hover:scale-105 rounded-md font-semibold text-black"
        >
          Livraison partielle
        </Link>

        <Link
          to={``}
          className="w-full bg-yellow-400 text-center py-3 transition hover:scale-105 rounded-md font-semibold text-black"
        >
          Livraison complète
        </Link>
      </div>
    </div>
  </div>
);

export default ComponentDeliveryDetailsPage;
