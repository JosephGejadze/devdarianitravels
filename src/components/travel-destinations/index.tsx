// @modules
import React from "react";
import { useTranslation } from "react-i18next";

// @styles
import styles from "./destinations.module.scss";

// @components
import useDestinations from "./destinations";
import DestinationCard from "./DestinationCard";
import Button from "react-bootstrap/Button";

const TravelDestinations: React.FC = () => {
  const { t } = useTranslation();
  const destinations = useDestinations();
  return (
    <div className={styles.destinationsContainer}>
      <h3>{t("destinations.popular")}</h3>
      <div className={styles.gridContainer}>
        {destinations.map((e, i) => (
          <DestinationCard {...e} key={i} />
        ))}
      </div>
      <a
        href="https://www.evotravelagent.com/devdariani"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="light" className={styles.button}>
          {t("destinations.explore")}
        </Button>
      </a>
    </div>
  );
};

export default TravelDestinations;
