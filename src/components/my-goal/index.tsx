// @modules
import React from "react";
import { useTranslation } from "react-i18next";
// @styles
import styles from "./MyGoal.module.scss";

// @assets
import Plane from "../../assets/Plane.jpg";

// @components
import Button from "react-bootstrap/Button";

const MyGoal: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.container_1}>
        <div className={styles.grid_container}>
          <div className={styles.statement}>
            <h2>{t("myGoal.myGoal")}</h2>
            <p>{t("myGoal.description")}</p>
          </div>
          <img src={Plane} alt="Plane" />
          <p className={styles.contact_info}>
            {t("myGoal.callMe")}
            <br />
            <a href="tel:+12018124054">1 (201) 815-4054</a>
            <br />
            <a href="mailto:devdarianitravels.gmail.com">
              devdarianitravels@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className={styles.container_2}>
        <h5>{t("myGoal.click")}</h5>
        <a
          href="https://www.evotravelagent.com/devdariani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="light" className={styles.button}>
            {t("myGoal.contact")}
          </Button>
        </a>
      </div>
    </>
  );
};

export default MyGoal;
