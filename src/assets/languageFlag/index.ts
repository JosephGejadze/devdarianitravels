import ka from "./flags/ka.svg";
import en from "./flags/en.svg";
import { Language } from "../../translations/i18n";

type ILanguageFlag = {
  [key in Language]: string;
};

const languageFlag: ILanguageFlag = { ka, en };

export default languageFlag;
