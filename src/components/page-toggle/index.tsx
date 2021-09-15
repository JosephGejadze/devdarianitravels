// @modules
import React, { useCallback, useState, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// @components
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

// @styles
import styles from "./PageToggle.module.scss";

interface ITogglePage {
  name: string;
  path: string;
}

const PageToggle = () => {
  const history = useHistory();
  const location = useLocation();
  const { t } = useTranslation();
  const [radioValue, setRadioValue] = useState(location.pathname);

  const pages: ITogglePage[] = useMemo(
    () => [
      { name: t("togglePage.home"), path: "/" },
      { name: t("togglePage.about"), path: "/about" },
    ],
    [t]
  );

  const handleClick = useCallback(
    (e: ITogglePage) => () => {
      if (e.path !== location.pathname) {
        history.push(e.path);
      }
    },
    [history, location.pathname]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setRadioValue(e.currentTarget.value),
    []
  );
  return (
    <ButtonGroup toggle>
      {pages.map((e, i) => (
        <ToggleButton
          type="radio"
          variant="link"
          value={e.path}
          checked={e.path === radioValue}
          onClick={handleClick(e)}
          onChange={handleChange}
          key={e.name + i}
          className={e.path === radioValue ? styles.active : styles.inactive}
        >
          {e.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default PageToggle;
