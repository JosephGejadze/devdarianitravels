// @modules
import React from "react";

// @components
import { IDestination } from "./destinations";
import Card from "react-bootstrap/Card";

// @styles
import styles from "./destinations.module.scss";

const DestinationCard: React.FC<IDestination> = ({ body, title, picture }) => {
  return (
    <Card className={styles.destinationCard}>
      <Card.Img variant="top" src={picture} />
      <Card.Title className={styles.title}>{title}</Card.Title>
      <Card.Text className={styles.body}>{body}</Card.Text>
    </Card>
  );
};

export default DestinationCard;
