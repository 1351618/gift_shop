"use client";

import { useState } from "react";
import styles from "./btn_theme.module.scss";

import type { RootState } from "@/redux-toolkit/store";
import { useSelector, useDispatch } from "react-redux";
import { themeSelect } from "@/redux-toolkit/Featurs/theme/themeSlice";

export default function BtnTheme() {
  const theme = useSelector((state: RootState) => state.theme.value);
  const [isThemeSwitch, setThemeSwitch] = useState(theme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    setThemeSwitch(!isThemeSwitch);
    dispatch(themeSelect(!theme));
  };
  return (
    <div className={styles.btnTheme}>
      <input type="checkbox" id="themeToggle" onChange={handleThemeToggle} />
      <label htmlFor="themeToggle">
        {/* <Image src={sunSvg} alt="sunSvg" /> */}
        {/* <Image src={moonSvg} alt="moonSvg" /> */}
      </label>
    </div>
  );
}
