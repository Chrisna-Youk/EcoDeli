import React from "react";
import { Link } from "react-router-dom";

const StarIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    fill="#ffce31"
    aria-hidden="true"
  >
    <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z" />
  </svg>
);

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const ProfileDetailsComponent = ({
  photo,
  firstname,
  lastname,
  status,
  reviews,
  profileId,
}) => (
  <div className="bg-white min-h-screen flex flex-col items-center w-screen py-10 px-4 mt-7 space-y-10">

    <div className="flex flex-col items-center mt-12">
      <img
        src={photo}
        alt={`Photo de profil`}
        className="w-32 h-32 rounded-full object-cover"
      />
      <h3 className="text-2xl font-bold text-gray-800 mt-2">
        {firstname} {lastname}
      </h3>

      <p className="mt-1 font-semibold text-yellow-600">{status}</p>

      <div className="flex items-center gap-1 mt-2">
        <Link className="underline text-yellow-600" to={`/customer/create/review/${profileId}`}>
          Poster un avis sur cet utilisateur
        </Link>
      </div>

    </div>

    <div className="flex flex-col max-w-[80vw] items-center mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Avis</h2>
      {reviews.length > 0 ? (
        <ul className="flex flex-row gap-10 flex-wrap justify-center items-center">
          {reviews.map((review, index) => (
            <li
              key={index}
              className="p-10 rounded-md bg-white shadow-md flex flex-col gap-5 justify-center items-center text-center w-64"
            >
              <p className="text-sm text-gray-800 font-semibold flex items-center gap-1">
                {review.grade} <StarIcon />
              </p>

              <p className="text-xs text-gray-500">
                {formatDate(review.createdAt)}
              </p>

              {review.comment && (
                <p className="text-sm text-gray-700 italic">"{review.comment}"</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Aucun avis pour le moment.</p>
      )}

    </div>
  </div>
);

export default ProfileDetailsComponent;
