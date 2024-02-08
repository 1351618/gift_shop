import React from "react";
import styles from "./filtration.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux-toolkit/store";

const dataFiltr = ["новогодние"];

export default function Filtration() {
  const languague = useSelector((state: RootState) => state.languague.value);
  const translations = require(`../../locales/${languague}.json`);
  // console.log(translations);
  const filtrationKeys = Object.keys(translations.filtration);
  return (
    <div className={styles.filtration}>
      {filtrationKeys.map((key) => (
        <button key={key}>{translations.filtration[key]}</button>
      ))}
    </div>
  );
}
