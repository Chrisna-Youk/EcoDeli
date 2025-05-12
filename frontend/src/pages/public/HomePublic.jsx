import { useTranslation } from "react-i18next";

const HomePublic = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("welcome")}</p>
    </div>
  );
};

export default HomePublic;
