import { useContext, useEffect } from "react";

import styles from "../styles/Home.module.css";
import { DataProps, MainContext } from "../context/mainContext";
import Timer from "../services/timer";
import Menu from "./menu";

export default function Home() {
  const data = useContext(MainContext) as DataProps;

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  return (
    <main
      className={
        data.theme == "Light" ? styles.containerLight : styles.containerDark
      }
    >
      <Menu />
      <h1 className={styles.title}>Próximo Gole D'água</h1>
      <Timer />
    </main>
  );
}
