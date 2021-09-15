import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import {
  Barcelona,
  Georgia,
  Japan,
  London,
  Rome,
  Paris,
} from "../../assets/destinations";

export interface IDestination {
  body?: string;
  title: string;
  picture: string;
}

const useDestinations: () => IDestination[] = () => {
  const { t } = useTranslation();
  return useMemo(
    () => [
      {
        body: t("destinations.georgiaBody"),
        picture: Georgia,
        title: t("destinations.georgia"),
      },
      {
        body: t("destinations.barcelonaBody"),
        picture: Barcelona,
        title: t("destinations.barcelona"),
      },
      {
        body: t("destinations.romeBody"),
        picture: Rome,
        title: t("destinations.rome"),
      },
      {
        body: t("destinations.japanBody"),
        picture: Japan,
        title: t("destinations.japan"),
      },
      {
        body: t("destinations.parisBody"),
        picture: Paris,
        title: t("destinations.paris"),
      },
      {
        body: t("destinations.londonBody"),
        picture: London,
        title: t("destinations.london"),
      },
    ],
    [t]
  );
};

export default useDestinations;
