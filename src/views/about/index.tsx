// @modules
import React from "react";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";

// @styles
import styles from "./about.module.scss";

// @components
import Button from "react-bootstrap/Button";

const About: React.FC = React.memo(() => {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <div className={styles.about}>
      <Button variant="success" onClick={history.goBack}>
        {t("hello")}
      </Button>
    </div>
  );
});

export default About;
