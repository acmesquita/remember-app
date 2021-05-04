import { useState, createContext } from "react";
export const MainContext = createContext({});

export interface DataProps {
  theme: "Dark" | "Light";
  setTheme: (string) => void;
  voiceActive: boolean;
  setVoiceActive: (boolean) => void;
  initialTimer: number;
  setInitialTimer: (number) => void;
}

export function MainProvider({ children }) {
  const [theme, setTheme] = useState("Light");
  const [voiceActive, setVoiceActive] = useState(true);
  const [initialTimer, setInitialTimer] = useState(1);
  const data = {
    theme,
    setTheme,
    voiceActive,
    setVoiceActive,
    initialTimer,
    setInitialTimer,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}
