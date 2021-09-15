// @modules
import React from "react";

// @styles
import styles from "./footer.module.scss";

// @assets
import ArcherTravelAffiliate from "../../assets/ArcherTravelAffiliate.png";

const Footer: React.FC = React.memo(() => {
  return (
    <div className={styles.footer}>
      <p>
        Florida Registration #35395
        <br />
        CST#: 2001330-10
      </p>
      <img src={ArcherTravelAffiliate} alt="Archer Travel Affiliate" />
    </div>
  );
});

export default Footer;
