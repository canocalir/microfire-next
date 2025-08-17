import React from "react";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import styles from "./ListsCard.module.scss";

/**
 * GRC Technology — Lists Card
 * React + TypeScript component using SCSS module for styling.
 */

type ListsCardProps = {
  items?: string[];
  note?: string;
  className?: string;
};

const defaultItems = [
  "Electrical meter boxes",
  "Small electrical cabinets",
  "Switchgear units",
  "Battery compartments (EV charging stations)",
  "UPS systems",
  "Li-Ion battery areas",
  "Charging stations",
  "Cable galleries",
];

const defaultNote =
  "Note: A single unit protects 0.3 m³ (300 liters) of space. This corresponds to approximately a cabinet size of 60cm x 60cm x 85cm.";

export default function ListsCard({
  items = defaultItems,
  note = defaultNote,
  className = "",
}: ListsCardProps) {
  return (
    <div className={`${styles.cardWrapper} ${className}`}>
      <ul className={styles.list}>
        {items.map((text, idx) => (
          <li key={idx} className={styles.listItem}>
            <FaCheckCircle className={styles.iconCheck} />
            <span className={styles.text}>{text}</span>
          </li>
        ))}
      </ul>

      {/* Note box */}
      <div className={styles.noteBox}>
        <div className={styles.noteContent}>
          <FaExclamationTriangle className={styles.iconAlert} />
          <p className={styles.noteText}>{note}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * USAGE EXAMPLE
 *
 * <ListsCard />
 *
 * or with custom data:
 * <ListsCard
 *   items={["Panel A", "Panel B"]}
 *   note="Note: Custom capacity text."
 * />
 */
