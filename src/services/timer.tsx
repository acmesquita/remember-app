import { useEffect, useState, useContext } from "react";
import { DataProps, MainContext } from "../context/mainContext";
import styles from "./../styles/Home.module.css";
import TextNotify from "./textNotify";
import VoiceNotify from "./voiceNotify";

export default function Timer() {
  const data = useContext(MainContext) as DataProps;
  const [timeDefault, setTimeDefault] = useState(50 * 60);
  const [time, setTime] = useState(timeDefault);

  const min = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const sec = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");

  useEffect(() => {
    const listener = function () {
       if (data.voiceActive) {
        VoiceNotify();
      }
    }

    window.addEventListener("focus", listener);
    return () => window.removeEventListener('focus', listener);
  }, [data.voiceActive]);

  useEffect(() => {
    if (time <= 0) {
      TextNotify();
      setTime(timeDefault);
      return;
    }

    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <p id="time" className={styles.time}>
      {min}:{sec}
    </p>
  );
}
