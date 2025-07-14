import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAuthContext from "../../contexts/auth/useAuthContext";
import { jwtDecode } from "jwt-decode";

const ProviderHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const http = useAuth();
  const context = useAuthContext();
  const userId = jwtDecode(context.auth).id;

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 2xl:hidden bg-white p-2 rounded-md shadow-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 6h18M3 12h18M3 18h18"
          />
        </svg>
      </button>

      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } 2xl:translate-x-0 transition-transform duration-300 fixed z-40 top-0 left-0 h-full w-72 bg-white shadow-md text-gray-700 flex flex-col p-4 font-[Poppins] text-md border-r border-gray-200`}
      >
        {/* <div className="flex justify-around items-center mb-6">
          <svg
            className="h-24 icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
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
                d="M682.4 238.5c0 12.3-1.3 24.4-3.8 36-4.3 20-12.2 38.8-22.8 55.5-30.2 47.3-83.2 78.6-143.4 78.6-59.7 0-112.2-30.8-142.6-77.3-11.4-17.4-19.6-37.1-24-58.1-2.3-11.2-3.5-22.8-3.5-34.6 0-93.9 76.1-170.1 170.1-170.1 9.5 0 18.9 0.8 28 2.3 7.1 1.2 14.1 2.8 20.8 4.8 70.1 20.9 121.2 85.9 121.2 162.9z"
                fill="#ffc905"
              ></path>
              <path
                d="M512.4 411.6c-58.7 0-113-29.4-145.1-78.7-11.8-18.1-20-38-24.4-59.2-2.4-11.5-3.6-23.4-3.6-35.2 0-95.4 77.6-173.1 173.1-173.1 9.6 0 19.1 0.8 28.5 2.3 7.1 1.2 14.3 2.8 21.2 4.9 34.9 10.5 66.4 32.3 88.5 61.6 22.9 30.2 34.9 66.3 34.9 104.3 0 12.4-1.3 24.7-3.9 36.6-4.3 20.1-12.1 39.1-23.3 56.5-32 50.1-86.6 80-145.9 80z m0-340.2c-92.1 0-167.1 75-167.1 167.1 0 11.5 1.2 22.9 3.5 34 4.2 20.4 12.2 39.6 23.6 57.1 31 47.6 83.3 75.9 140 75.9 57.3 0 110-28.9 140.9-77.2 10.7-16.8 18.3-35.1 22.4-54.5 2.5-11.5 3.7-23.4 3.7-35.3 0-73.3-49-139.1-119.1-160.1-6.7-2-13.6-3.6-20.5-4.7-9-1.5-18.2-2.3-27.4-2.3z"
                fill="#ffc905"
              ></path>
              <path
                d="M511.4 652.9m-214 0a214 214 0 1 0 428 0 214 214 0 1 0-428 0Z"
                fill="#3b7500"
              ></path>
              <path
                d="M511.4 869.9c-58 0-112.5-22.6-153.5-63.6s-63.6-95.5-63.6-153.5 22.6-112.5 63.6-153.5 95.5-63.6 153.5-63.6 112.5 22.6 153.5 63.6 63.6 95.5 63.6 153.5-22.6 112.5-63.6 153.5-95.5 63.6-153.5 63.6z m0-428.1c-116.4 0-211 94.7-211 211s94.7 211 211 211 211-94.7 211-211-94.6-211-211-211z"
                fill="#ffc905"
              ></path>
              <path d="M511.4 574.1l-70.4-122h140.8z" fill="#FFFFFF"></path>
              <path
                d="M511.4 580.1l-75.6-131H587l-75.6 131z m-65.2-125l65.2 113 65.2-113H446.2z"
                fill="#ffc905"
              ></path>
              <path
                d="M369.8 179.3V373c0 43.5 35.6 79.1 79.1 79.1h127.8c43.5 0 79.1-35.6 79.1-79.1V179.3"
                fill="#ffffff"
              ></path>
              <path
                d="M576.7 455.1H448.9c-45.3 0-82.1-36.8-82.1-82.1V179.3h6V373c0 42 34.1 76.1 76.1 76.1h127.8c42 0 76.1-34.1 76.1-76.1V179.3h6V373c0 45.3-36.9 82.1-82.1 82.1z"
                fill="#ffc905"
              ></path>
              <path
                d="M432.2 261.4m-67.9 0a67.9 67.9 0 1 0 135.8 0 67.9 67.9 0 1 0-135.8 0Z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M432.2 332.4c-39.1 0-70.9-31.8-70.9-70.9 0-39.1 31.8-70.9 70.9-70.9 39.1 0 70.9 31.8 70.9 70.9 0 39-31.8 70.9-70.9 70.9z m0-135.9c-35.8 0-64.9 29.1-64.9 64.9s29.1 64.9 64.9 64.9 64.9-29.1 64.9-64.9-29.1-64.9-64.9-64.9z"
                fill="#ffc905"
              ></path>
              <path
                d="M592.8 261.4m-67.9 0a67.9 67.9 0 1 0 135.8 0 67.9 67.9 0 1 0-135.8 0Z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M592.8 332.4c-39.1 0-70.9-31.8-70.9-70.9 0-39.1 31.8-70.9 70.9-70.9 39.1 0 70.9 31.8 70.9 70.9 0 39-31.8 70.9-70.9 70.9z m0-135.9c-35.8 0-64.9 29.1-64.9 64.9s29.1 64.9 64.9 64.9 64.9-29.1 64.9-64.9-29.1-64.9-64.9-64.9z"
                fill="#ffc905"
              ></path>
              <path
                d="M532.2 276.2h-6c0-7.4-6-13.4-13.4-13.4s-13.4 6-13.4 13.4h-6c0-10.7 8.7-19.4 19.4-19.4 10.7-0.1 19.4 8.6 19.4 19.4zM512.6 408.1c-23.1 0-46.5-5.6-46.5-16.3h6c0 3.5 14.3 10.3 40.5 10.3s40.5-6.8 40.5-10.3h6c-0.1 10.7-23.4 16.3-46.5 16.3z"
                fill="#ffc905"
              ></path>
              <path
                d="M749.3 916.5H274.8c-6.6 0-12-5.4-12-12V528.9c0-6.6 5.4-12 12-12h474.5c6.6 0 12 5.4 12 12v375.6c0 6.6-5.4 12-12 12z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M749.3 919.5H274.8c-8.3 0-15-6.7-15-15V528.9c0-8.3 6.7-15 15-15h474.5c8.3 0 15 6.7 15 15v375.6c0 8.2-6.7 15-15 15zM274.8 519.9c-5 0-9 4-9 9v375.6c0 5 4 9 9 9h474.5c5 0 9-4 9-9V528.9c0-5-4-9-9-9H274.8z"
                fill="#ffc905"
              ></path>
              <path
                d="M650.5 134.2c-21.8-28.8-52.5-50.4-86.8-61l-1.7-0.5c-7-2.1-14.1-3.7-21.2-4.9h-0.1l-2.8-0.5c-8.4-1.3-17-1.9-25.6-1.9-95.4 0-173.1 77.6-173.1 173.1 0 11.9 1.2 23.7 3.6 35.2l0.4 1.8 1.7 0.5c6.8 2 13.8 3.7 20.8 4.8l3.6 0.6c8.3 1.2 16.8 1.8 25.2 1.8 38.5 0 74.9-12.4 105.3-35.7 22-16.9 39.8-39 51.5-64.1 3.1 6.2 6.5 12.2 10.3 18 22 33.5 55.1 58.6 93.1 70.5 1.5 0.5 2.9 0.9 4.4 1.3 6.1 1.7 12.5 3.2 18.8 4.2l2.8 0.5 0.6-2.8c2.6-11.9 3.9-24.2 3.9-36.6 0.2-38-11.8-74-34.7-104.3z"
                fill="#ffc905"
              ></path>
              <path
                d="M784.8 746c-12.9 18-33.9 18-46.8 0-12.9-18-12.9-47.1 0-65 12.9-18 33.9-18 46.8 0 13 17.9 13 47 0 65z"
                fill="#ffffff"
              ></path>
              <path
                d="M761.4 762.4c-9.8 0-19-5.2-25.8-14.7-13.6-18.9-13.6-49.7 0-68.6 6.8-9.5 16-14.7 25.8-14.7s19 5.2 25.8 14.7c13.6 18.9 13.6 49.7 0 68.6-6.8 9.5-15.9 14.7-25.8 14.7z m0-92c-7.8 0-15.3 4.3-21 12.2-12.2 17-12.2 44.6 0 61.5 5.7 7.9 13.1 12.2 21 12.2 7.8 0 15.3-4.3 21-12.2 12.2-17 12.2-44.6 0-61.5-5.7-7.8-13.1-12.2-21-12.2z"
                fill="#ffc905"
              ></path>
              <path
                d="M286.7 746c-12.9 18-33.9 18-46.8 0-12.9-18-12.9-47.1 0-65 12.9-18 33.9-18 46.8 0s12.9 47 0 65z"
                fill="#ffffff"
              ></path>
              <path
                d="M263.3 762.4c-9.8 0-19-5.2-25.8-14.7-13.6-18.9-13.6-49.7 0-68.6 6.8-9.5 16-14.7 25.8-14.7s19 5.2 25.8 14.7c13.6 18.9 13.6 49.7 0 68.6-6.8 9.5-16 14.7-25.8 14.7z m0-92c-7.8 0-15.3 4.3-21 12.2-12.2 17-12.2 44.6 0 61.5 5.7 7.9 13.1 12.2 21 12.2 7.8 0 15.3-4.3 21-12.2 12.2-17 12.2-44.6 0-61.5-5.7-7.8-13.2-12.2-21-12.2z"
                fill="#ffc905"
              ></path>
              <path
                d="M660.4 820.4H361.9c-6.6 0-12-5.4-12-12V622c0-6.6 5.4-12 12-12h298.5c6.6 0 12 5.4 12 12v186.3c0 6.7-5.4 12.1-12 12.1z"
                fill="#ffc905"
              ></path>
              <path
                d="M403.3 781.8l6.9 2.7c-1.1 4.8-2.9 8.3-5.4 10.5s-5.6 3.3-9.2 3.3c-4.6 0-8.3-1.8-11.2-5.3-3.3-4.1-4.9-9.6-4.9-16.5 0-7.3 1.7-13.1 5-17.2 2.9-3.6 6.7-5.4 11.6-5.4 3.9 0 7.3 1.3 9.9 4 1.9 1.9 3.3 4.8 4.2 8.5l-7 2.1c-0.5-2.3-1.3-4.1-2.7-5.3-1.3-1.2-2.9-1.9-4.7-1.9-2.6 0-4.7 1.1-6.4 3.4s-2.5 6-2.5 11.2c0 5.4 0.8 9.3 2.4 11.5s3.7 3.4 6.2 3.4c1.9 0 3.5-0.7 4.9-2.2s2.3-3.6 2.9-6.8zM422.7 797.6H416v-31.1h6.3v4.4c1.1-2.1 2-3.4 2.9-4.1s1.8-1 2.9-1c1.5 0 3 0.5 4.4 1.6l-2.1 7.2c-1.1-0.9-2.2-1.3-3.2-1.3-0.9 0-1.8 0.3-2.5 1s-1.2 2-1.5 3.8-0.5 5.2-0.5 10v9.5zM450.2 787.7l6.7 1.4c-0.9 3.1-2.3 5.4-4.2 7-1.9 1.5-4.2 2.3-6.9 2.3-3.8 0-6.7-1.3-8.7-3.8-2.4-2.9-3.6-7-3.6-12.3 0-5.2 1.2-9.4 3.7-12.5 2.1-2.6 4.7-4 8-4 3.7 0 6.5 1.3 8.6 4 2.4 3.1 3.6 7.6 3.6 13.7v0.9h-16.9c0 2.5 0.6 4.4 1.7 5.7 1.1 1.4 2.4 2 3.9 2 1.9 0.1 3.4-1.4 4.1-4.4z m0.4-8.3c-0.1-2.4-0.6-4.3-1.6-5.5-1-1.2-2.1-1.8-3.5-1.8s-2.6 0.6-3.6 1.9c-1 1.3-1.5 3.1-1.5 5.4h10.2zM486.1 797.6h-6.3V793c-1 1.8-2.3 3.1-3.7 4s-2.9 1.3-4.3 1.3c-2.9 0-5.3-1.4-7.5-4.3-2.1-2.8-3.2-6.9-3.2-12.2 0-5.3 1-9.3 3.1-12 2.1-2.7 4.6-4.1 7.6-4.1 1.4 0 2.8 0.4 4 1.1 1.2 0.7 2.4 1.8 3.4 3.3v-15.4h6.8v42.9z m-18-16.2c0 2.8 0.2 4.9 0.7 6.3 0.5 1.4 1.2 2.4 2 3.1 0.9 0.7 1.9 1 3 1 1.5 0 2.8-0.8 3.9-2.4 1.1-1.6 1.6-4 1.6-7.3 0-3.6-0.5-6.2-1.6-7.7-1.1-1.6-2.4-2.4-4-2.4s-2.9 0.8-4 2.3c-1 1.6-1.6 3.9-1.6 7.1zM492.8 762.3v-7.6h6.8v7.6h-6.8z m0 35.3v-31.1h6.8v31.1h-6.8zM518.1 766.5v6.6h-4.6v12.6c0 2.7 0.1 4.3 0.2 4.7 0.3 0.8 0.8 1.2 1.7 1.2 0.6 0 1.5-0.3 2.7-0.8l0.6 6.4c-1.6 0.8-3.3 1.2-5.3 1.2-1.7 0-3.1-0.4-4.1-1.2s-1.7-2-2.1-3.5c-0.3-1.1-0.4-3.4-0.4-6.9V773h-3.1v-6.6h3.1v-6.2l6.8-4.8v11h4.5zM559.1 781.8l6.9 2.7c-1.1 4.8-2.9 8.3-5.4 10.5s-5.6 3.3-9.2 3.3c-4.6 0-8.3-1.8-11.2-5.3-3.3-4.1-4.9-9.6-4.9-16.5 0-7.3 1.7-13.1 5-17.2 2.9-3.6 6.7-5.4 11.6-5.4 3.9 0 7.3 1.3 9.9 4 1.9 1.9 3.3 4.8 4.2 8.5l-7 2.1c-0.4-2.3-1.3-4.1-2.7-5.3s-2.9-1.9-4.7-1.9c-2.6 0-4.7 1.1-6.4 3.4-1.6 2.3-2.5 6-2.5 11.2 0 5.4 0.8 9.3 2.4 11.5s3.7 3.4 6.2 3.4c1.9 0 3.5-0.7 4.9-2.2s2.3-3.6 2.9-6.8zM577.1 775.9l-6.1-1.3c0.7-3.1 2-5.4 3.7-6.8s4.2-2.1 7.4-2.1c2.9 0 5 0.4 6.5 1.2 1.5 0.8 2.6 1.9 3.2 3.3 0.6 1.4 1 3.9 1 7.5l-0.1 9.6c0 2.7 0.1 4.7 0.3 6 0.2 1.3 0.6 2.7 1.2 4.2h-6.7l-0.9-3.4c-1.2 1.4-2.4 2.4-3.7 3.1s-2.7 1-4.2 1c-2.5 0-4.5-0.8-6.1-2.5-1.6-1.7-2.4-3.9-2.4-6.7 0-1.8 0.3-3.3 1-4.6 0.6-1.3 1.6-2.4 2.7-3.1s3-1.5 5.6-2.1c3.1-0.7 5.3-1.4 6.5-2 0-1.7-0.1-2.9-0.4-3.4s-0.7-1-1.3-1.3-1.6-0.5-2.8-0.5c-1.2 0-2.2 0.3-2.9 0.8s-1.1 1.6-1.5 3.1z m9 6.7c-0.9 0.4-2.2 0.8-4 1.2-2.1 0.5-3.5 1.2-4.1 1.8s-1 1.5-1 2.6c0 1.2 0.4 2.2 1.1 3 0.7 0.8 1.6 1.2 2.7 1.2 1 0 1.9-0.3 2.8-1s1.6-1.4 1.9-2.3c0.4-0.9 0.5-2.5 0.5-4.9v-1.6zM605.9 797.6h-6.8v-31.1h6.3v4.4c1.1-2.1 2-3.4 2.9-4.1s1.8-1 2.9-1c1.5 0 3 0.5 4.4 1.6l-2.1 7.2c-1.1-0.9-2.2-1.3-3.2-1.3-0.9 0-1.8 0.3-2.5 1s-1.2 2-1.5 3.8-0.5 5.2-0.5 10v9.5zM641.9 797.6h-6.3V793c-1 1.8-2.3 3.1-3.7 4s-2.9 1.3-4.3 1.3c-2.9 0-5.3-1.4-7.5-4.3-2.1-2.8-3.2-6.9-3.2-12.2 0-5.3 1-9.3 3.1-12 2.1-2.7 4.6-4.1 7.6-4.1 1.4 0 2.8 0.4 4 1.1 1.2 0.7 2.4 1.8 3.4 3.3v-15.4h6.8v42.9z m-18-16.2c0 2.8 0.2 4.9 0.7 6.3 0.5 1.4 1.2 2.4 2 3.1s1.9 1 3 1c1.5 0 2.8-0.8 3.9-2.4s1.6-4 1.6-7.3c0-3.6-0.5-6.2-1.6-7.7-1.1-1.6-2.4-2.4-4-2.4s-2.9 0.8-4 2.3c-1 1.6-1.6 3.9-1.6 7.1z"
                fill="#FFFFFF"
              ></path>
              <path d="M352.9 649h316.4v37.3H352.9z" fill="#ffffff"></path>
              <path
                d="M672.3 689.3H349.9V646h322.4v43.3z m-316.4-6h310.4V652H355.9v31.3z"
                fill="#ffc905"
              ></path>
              <path d="M656.9 632.1l-17.7 10.2v-20.4z" fill="#ffffff"></path>
            </g>
          </svg>
          <button
            className="2xl:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div> */}
        <div className="flex flex-row items-center space-x-4">
          <img src="../../../public/ecodeli-logo.png" alt="Logo" width={100} />
          <h1 className="text-lg font-semibold">Espace Prestataire</h1>
        </div>

        <nav className="flex-1 space-y-2 mt-6">
          <Link
            to={"/provider/chat"}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2 7h20M2 11h20m-2 4h-4m6 0a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v8z"
              />
            </svg>
            Discussions
          </Link>
          <details className="group">
            <summary className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer list-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 4v16m0 0H5a2 2 0 01-2-2V6a2 2 0 012-2h11z"
                />
              </svg>
              Annonces
            </summary>
            <div className="pl-8 mt-2 space-y-1 flex flex-col">
              <Link
                to={"/provider/services"}
                className="flex items-center gap-2 py-1 hover:text-yellow-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z"
                  />
                </svg>
                Mes annonces
              </Link>
              <Link
                to={"/provider/create/service"}
                className="flex items-center gap-2 py-1 hover:text-yellow-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Créer une annonce
              </Link>
              <Link
                to={"/provider/create/transport"}
                className="flex items-center gap-2 py-1 hover:text-yellow-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Créer une annonce de transport
              </Link>
            </div>
          </details>

          <details className="group">
            <summary className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer list-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m16 0V5a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0H4"
                />
              </svg>
              Prestation
            </summary>
            <div className="pl-8 mt-2 space-y-1 flex flex-col">
              <a
                href="/provider/ProvidingUpComing"
                className="flex items-center gap-2 py-1 hover:text-yellow-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                A venir
              </a>
              <a
                href="/provider/ProvidingHistory"
                className="flex items-center gap-2 py-1 hover:text-yellow-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Passées
              </a>
            </div>
          </details>

          <a
            href="/provider/Payements"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2 7h20M2 11h20m-2 4h-4m6 0a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v8z"
              />
            </svg>
            Paiements
          </a>

          <details className="group">
            <summary className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer list-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14a6 6 0 100-12 6 6 0 000 12zM4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2"
                />
              </svg>
              Profil
            </summary>
            <div className="pl-8 mt-2 space-y-1 flex flex-col">
              <a
                href={`../../customer/profile/${userId}`}
                className="flex items-center gap-2 py-1 hover:text-yellow-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z"
                  />
                </svg>
                Consulter
              </a>
              <a
                href="/provider/update/documents"
                className="flex items-center gap-2 py-1 hover:text-yellow-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5h10M11 5v14m0-14L3 19"
                  />
                </svg>
                Modifier mes documents
              </a>
              <a
                href="/provider/profile"
                className="flex items-center gap-2 py-1 hover:text-yellow-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5h10M11 5v14m0-14L3 19"
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
    </>
  );
};

export default ProviderHeader;
