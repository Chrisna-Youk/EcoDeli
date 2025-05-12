import { useTranslation } from "react-i18next";

const HomeProvider = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("welcome")}</p>
    </div>
  );
};

export default HomeProvider;
