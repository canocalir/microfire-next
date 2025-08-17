import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, icon }) => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.titleContainer}><span>{icon}</span>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;