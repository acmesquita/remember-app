import { useContext, useState } from "react";
import styles from "../styles/Menu.module.css";
import { DataProps, MainContext } from "../context/mainContext";

import { VscColorMode } from "react-icons/vsc";
import { RiTimerFill } from "react-icons/ri";
import { IoVolumeMediumSharp, IoVolumeMuteOutline } from "react-icons/io5";

import Popover from "react-popover";

export default function Menu() {
  const data = useContext(MainContext) as DataProps;
  const [toggleTheme, setToggleTheme] = useState(false);
  const [toggleTimer, setToggleTimer] = useState(false);
  const [toggleSound, setToggleSound] = useState(false);

  function setTheme() {
    let theme = data.theme;
    console.log("tema");
    if (theme == "Light") {
      data.setTheme("Dark");
    } else {
      data.setTheme("Light");
    }
  }

  function setVoiceNotify() {
    data.setVoiceActive(!data.voiceActive);
  }

  return (
    <main className={styles.container}>
      <Popover
        isOpen={toggleSound}
        body="Mutar voz"
        preferPlace="below"
        place="below"
        className={styles.popoverBody}
        children={
          <div>
            {data.voiceActive ? (
              <IoVolumeMediumSharp
                className={styles.icons}
                size="25"
                onClick={setVoiceNotify}
                onMouseOver={() => setToggleSound(true)}
                onMouseOut={() => setToggleSound(false)}
              />
            ) : (
              <IoVolumeMuteOutline
                className={styles.icons}
                size="25"
                onClick={setVoiceNotify}
                onMouseOver={() => setToggleSound(true)}
                onMouseOut={() => setToggleSound(false)}
              />
            )}
          </div>
        }
      />

      <Popover
        isOpen={toggleTheme}
        body="Mudar tema"
        preferPlace="below"
        place="below"
        className={styles.popoverBody}
        children={
          <div>
            <VscColorMode
              className={styles.icons}
              size="25"
              onClick={setTheme}
              onMouseOver={() => setToggleTheme(true)}
              onMouseOut={() => setToggleTheme(false)}
            />
          </div>
        }
      />

      <Popover
        isOpen={toggleTimer}
        body="Definir tempo"
        preferPlace="below"
        place="below"
        className={styles.popoverBody}
        children={
          <div>
            <RiTimerFill
              className={styles.icons}
              size="25"
              onMouseOver={() => setToggleTimer(true)}
              onMouseOut={() => setToggleTimer(false)}
            />
          </div>
        }
      />
    </main>
  );
}
