import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <div>
      <p>{t("welcome")}</p>
    </div>
  );
};

export default Home;
