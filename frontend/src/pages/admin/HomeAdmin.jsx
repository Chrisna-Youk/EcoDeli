import { useTranslation } from "react-i18next";

const HomeAdmin = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("welcome")}</p>
    </div>
  );
};

export default HomeAdmin;
