import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLangContext from "../../contexts/language/useLangContext";
import i18n from "../../i18n/i18n";

const PublicHeader = () => {
  const { t } = useTranslation();
  const { lang, setLang } = useLangContext();

  const handleLanguage = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    localStorage.setItem("language", newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <header>
      <nav className="p-4 bg-green-950 font-[Poppins]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 hover:scale-105 transition">
            <img src="/ecodeli-logo.png" alt="EcoDeli" className="h-10" />
            <a href="../">
              <p className="text-xl text-amber-200">EcoDeli</p>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
              className="text-amber-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </button>
          </div>

          <ul className="hidden md:flex justify-center items-center">
            <li className="mx-4 text-amber-50 hover:text-amber-300 duration-500 text-md hover:scale-105 transition">
              <Link to={"/delivrer"}>{t("HEADER_DELIVRER")}</Link>
            </li>
            <li className="mx-4 text-amber-50 hover:text-amber-300 duration-500 text-md hover:scale-105 transition">
              <Link to={"/customer"}>{t("HEADER_PRIVATE")}</Link>
            </li>
            <li className="mx-4 text-amber-50 hover:text-amber-300 duration-500 text-md hover:scale-105 transition">
              <Link to={"/provider"}>{t("HEADER_PROVIDER")}</Link>
            </li>
            <li className="mx-4 text-amber-50 hover:text-amber-300 duration-500 text-md hover:scale-105 transition">
              <Link to={"/merchant"}>{t("HEADER_MERCHANT")}</Link>
            </li>
          </ul>

          {/* Langue + bouton */}
          <div className="hidden md:flex items-center">
            <form className="mx-2">
              <select
                value={lang}
                onChange={(e) => handleLanguage(e)}
                className="text-green-950 bg-amber-300 hover:bg-amber-400 font-medium rounded-lg text-sm px-3 py-2 text-center cursor-pointer mx-2"
              >
                <option lang="fr" value="fr">
                  🇫🇷
                </option>
                <option lang="en" value="en">
                  🇬🇧
                </option>
              </select>
            </form>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to={"/login"}
                className="text-green-950 bg-amber-300 hover:bg-amber-400 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer hover:scale-105 transition"
              >
                {t("HEADER_LOGIN")}
              </Link>
              <Link
                to={"/register"}
                className="text-green-950 bg-amber-300 hover:bg-amber-400 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer hover:scale-105 transition"
              >
                {t("HEADER_REGISTER")}
              </Link>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <ul id="mobile-menu" className="md:hidden mt-4 space-y-2 hidden">
          <li className="text-amber-50 hover:text-amber-300 duration-300 text-base">
            <a href="">Livreur</a>
          </li>
          <li className="text-amber-50 hover:text-amber-300 duration-300 text-base">
            <a href="">Particulier</a>
          </li>
          <li className="text-amber-50 hover:text-amber-300 duration-300 text-base">
            <a href="">Prestataire</a>
          </li>
          <li className="text-amber-50 hover:text-amber-300 duration-300 text-base">
            <a href="">Commerçant</a>
          </li>

          {/* Langue + bouton en mobile */}
          <li className="mt-2">
            <form>
              <select className="w-full text-green-950 bg-amber-300 hover:bg-amber-400 font-medium rounded-lg text-sm px-3 py-2 text-center cursor-pointer">
                <option lang="fr" value="fr" defaultChecked>
                  🇫🇷
                </option>
                <option lang="en" value="en">
                  🇬🇧
                </option>
              </select>
            </form>
          </li>
          <li className="mt-2">
            <Link
              href="/register"
              className="w-full block text-green-950 bg-amber-300 hover:bg-amber-400 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer"
            >
              Get started
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PublicHeader;
