// @modules
import React from "react";

// @styles
import styles from "./header.module.scss";

// @assets
import logo from "../../assets/logo.png";

// @components
import NavBar from "react-bootstrap/Navbar";
import LangToggle from "../lang-toggle";
import PageToggle from "../page-toggle";

const Header: React.FC = React.memo(function Header() {
  return (
    <NavBar expand="lg" className={styles.header}>
      <div className={styles.langSwitchContainer}>
        <LangToggle languages={["ka", "en"]} />
      </div>
      <img className={styles.logo} src={logo} alt="logo" />
      <h4 className={styles.logoSub}>DEVDARIANI TRAVELS</h4>
      <span className={styles.slogan}>Find your Perfect Vacation</span>
      <PageToggle />
    </NavBar>
  );
});

export default Header;
