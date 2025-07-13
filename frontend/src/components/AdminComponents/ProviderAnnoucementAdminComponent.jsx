import { Link } from "react-router-dom";

const ProviderAnnoucementAdminComponent = ({
  id,
  index,
  href,
  image,
  title,
  date,
  price,
  rating,
  city_start,
  city_end,
  onDelete, // 👈 ajoute cette prop
}) => {

  const formattedDates = ""; // À compléter plus tard si tu veux formater les dates

  const handleDelete = async (e) => {
    e.preventDefault(); // 👈 évite que le <Link> redirige au clic sur le bouton
    const confirmed = window.confirm("Supprimer ?");
    if (!confirmed) return;

    onDelete(id); // 👈 déclenche la suppression via le parent
  };

  return (
    <Link to={href} key={index}>
      <div className="max-w-60 rounded-xl shadow-md overflow-hidden border border-gray-200 hover:bg-gray-200 duration-300 hover:shadow-2xl hover:scale-110">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-2xl"
          />
          <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
            <button
              onClick={handleDelete}
              className="text-red-400 hover:text-red-800 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">
            {formattedDates} | {city_start} {city_end ? `- ${city_end}` : ""}
          </p>
          <p className="text-sm text-gray-800 mt-1">
            <span className="font-semibold">{price}</span> ·
            <span className="text-amber-400">★ {rating}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProviderAnnoucementAdminComponent;
