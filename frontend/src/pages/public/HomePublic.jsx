import { useTranslation } from "react-i18next";

const HomePublic = () => {
  const { t } = useTranslation();
  return (
    <div className="font-[Poppins] text-white bg-green-950 overflow-y-hidden">
      <div className="w-screen h-100 bg-[url('/truck-background.jpg')] bg-cover bg-center"></div>
      <div className="p-30 bg-green-950">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-amber-200">
            {t("LANDING_TITLE")}
          </h3>
          <p className="text-lg mt-5 text-center">{t("LANDING_DESCRIPTION")}</p>
        </div>
      </div>
      <div className="flex flex-row p-10">
        <div className="h-70 w-[50vw] bg-[url('/handshake-bg.jpg')] bg-cover bg-center rounded-2xl"></div>
        <div className="bg-green-950 text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-amber-200">
            {t("LANDING_PRIVATE")}
          </h3>
          <p className="text-lg mt-5 text-center p-3">
            {t("LANDING_PRIVATE_DESCRIPTION")}
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse p-10">
        <div className="h-70 w-[50vw] bg-[url('/delivery-bg.jpg')] bg-cover bg-center rounded-2xl"></div>
        <div className="bg-green-950 text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-amber-200">
            {t("LANDING_DELIVRER")}
          </h3>
          <p className="text-lg mt-5 text-center p-3">
            {t("LANDING_DELIVRER_DESCRIPTION")}
          </p>
        </div>
      </div>
      <div className="flex flex-row p-10">
        <div className="h-70 w-[50vw] bg-[url('/provider-bg.jpg')] bg-cover bg-center rounded-2xl"></div>
        <div className="bg-green-950 text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-amber-200">
            {t("LANDING_PROVIDER")}
          </h3>
          <p className="text-lg mt-5 text-center p-3">
            {t("LANDING_PROVIDER_DESCRIPTION")}
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse p-10">
        <div className="h-70 w-[50vw] bg-[url('/commercant-bg.jpg')] bg-cover bg-center rounded-2xl"></div>
        <div className="bg-green-950 text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-amber-200">
            {t("LANDING_MERCHANT")}
          </h3>
          <p className="text-lg mt-5 text-center p-3">
            {t("LANDING_MERCHANT_DESCRIPTION")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePublic;
