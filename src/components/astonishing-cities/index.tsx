// @modules
import React from "react";
import { useTranslation } from "react-i18next";

// @styles
import styles from "./AstonishingCities.module.scss";

const AstonishingCities: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.astonishing_container}>
      <h3 className={styles.header}>{t("astonishingCities")}</h3>
      <div className={styles.videos}>
        <div>
          <iframe
            src="https://www.youtube.com/embed/oz45k8EYblk"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
          <h3>{t("destinations.paris")}</h3>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/jB0Ho8E5fHA"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
          <h3>{t("destinations.london")}</h3>
        </div>
      </div>
    </div>
  );
};

export default AstonishingCities;
