import { Link } from "react-router-dom";

const CustomersHomeCards = ({
  image,
  href,
  title,
  date,
  price,
  rating,
  city_start,
  city_end,
}) => (
  <Link to={href}>
    <div className="max-w-60 rounded-xl shadow-md overflow-hidden border border-gray-200 hover:bg-gray-200 duration-300 hover:shadow-2xl hover:scale-110">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-2xl"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">
          {date} | {city_start} - {city_end}
        </p>
        <p className="text-sm text-gray-800 mt-1">
          <span className="font-semibold">{price}</span> ·{" "}
          <span className="text-amber-400">★ {rating}</span>
        </p>
      </div>
    </div>
  </Link>
);

export default CustomersHomeCards;
