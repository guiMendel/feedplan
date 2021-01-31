import styles from "../styles/Home.module.css";
import DayCardTitle from "../components/DayCardTitle";
import DayCardLunch from "../components/DayCardLunch";
import DayCardDinner from "../components/DayCardDinner";

import { FiMoon, FiSun } from "react-icons/fi";

export default function Home() {
  function MapForOneWeek(callback) {
    return [...Array(7).keys()].map(callback);
  }

  return (
    <div className={styles.container}>
      <main>
        {/* Secao de titulos dos dias */}
        <section>
          <aside></aside>
          {MapForOneWeek((day) => {
            return <DayCardTitle day={day} key={day} />;
          })}
        </section>

        {/* Secao de almocos */}
        <section>
          <aside>
            <FiSun size="2rem" />
          </aside>
          {MapForOneWeek((day) => {
            return <DayCardLunch day={day} key={day} />;
          })}
        </section>

        {/* Secao de jantares */}
        <section>
          <aside>
            <FiMoon size="2rem" />
          </aside>
          {MapForOneWeek((day) => {
            return <DayCardDinner day={day} key={day} />;
          })}
        </section>
      </main>
    </div>
  );
}
