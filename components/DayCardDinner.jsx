import styles from "../styles/Calendar.module.css";

import { VscDiffAdded } from "react-icons/vsc";

export default function DayCardDinner({ day }) {
  return (
    <div className={`${styles.dayCard} ${styles.mealSection}`}>
      <VscDiffAdded size="2rem" />
    </div>
  );
}
