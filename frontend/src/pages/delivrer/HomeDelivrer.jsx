import { useTranslation } from "react-i18next";

const HomeDelivrer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("welcome")}</p>
    </div>
  );
};

export default HomeDelivrer;
