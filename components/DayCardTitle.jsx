import Moment from "react-moment";
import styles from "../styles/Calendar.module.css";

export default function DayCardTitle({ day }) {
  return (
    <div className={styles.dayCard}>
      <Moment format="dddd" add={{ days: day }} className={styles.weekDay} />
      <Moment
        format="D [de] MMMM"
        add={{ days: day }}
        className={styles.date}
      />
    </div>
  );
}
