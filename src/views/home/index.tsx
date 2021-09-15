// @modules
import React from "react";

// @styles
import styles from "./home.module.scss";

// @components
import Jumbotron from "react-bootstrap/Jumbotron";
import TravelDestinations from "../../components/travel-destinations";
import MyGoal from "../../components/my-goal";
import AstonishingCities from "../../components/astonishing-cities";

const Home: React.FC = React.memo(() => {
  return (
    <div className={styles.home}>
      <Jumbotron fluid className={styles.jumbo}>
        <h1>TRAVEL</h1>
        <h1>EXPLORE</h1>
        <h1>DISCOVER</h1>
      </Jumbotron>
      <TravelDestinations />
      <AstonishingCities />
      <MyGoal />
    </div>
  );
});

export default Home;
