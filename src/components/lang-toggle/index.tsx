// @modules
import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

// @assets
import { Language } from "../../translations/i18n";
import languageFlag from "../../assets/languageFlag";

// @copmonents
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

interface ILangToggle {
  languages: Language[];
}

const LangToggle: React.FC<ILangToggle> = React.memo(({ languages }) => {
  const { i18n } = useTranslation();
  const [radioValue, setRadioValue] = useState(i18n.language);

  const handleClick = useCallback(
    (newLang) => () => {
      if (newLang !== i18n.language) i18n.changeLanguage(newLang);
    },
    [i18n]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setRadioValue(e.currentTarget.value),
    []
  );

  return (
    <ButtonGroup toggle style={{ alignItems: "center" }}>
      {languages.map((e, i) => (
        <ToggleButton
          type="radio"
          variant="dark"
          key={i}
          value={e}
          checked={e === radioValue}
          onChange={handleChange}
          onClick={handleClick(e)}
        >
          <img src={languageFlag[e]} alt={e} style={{ width: "24px" }} />
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
});

export default LangToggle;
