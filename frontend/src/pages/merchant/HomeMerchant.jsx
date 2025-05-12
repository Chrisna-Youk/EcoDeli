import { useTranslation } from "react-i18next";

const HomeMerchant = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("welcome")}</p>
    </div>
  );
};

export default HomeMerchant;
