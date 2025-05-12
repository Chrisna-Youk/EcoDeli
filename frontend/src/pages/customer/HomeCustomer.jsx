import { useTranslation } from "react-i18next";

const HomeCustomer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("welcome")}</p>
    </div>
  );
};

export default HomeCustomer;
