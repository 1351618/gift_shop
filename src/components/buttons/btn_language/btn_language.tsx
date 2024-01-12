// btn_language
"use client";

import { useEffect, useState } from "react";
import styles from "./btn_language.module.scss";

import type { RootState } from "../../../redux-toolkit/store";
import { useSelector, useDispatch } from "react-redux";
import { languageSelect } from "@/redux-toolkit/Featurs/languague/languageSlise";

const listLanguage = ["ru", "en", "cy"];

export default function BtnLanguage() {
  const languague = useSelector((state: RootState) => state.languague.value);
  const [selectedLanguage, setSelectedLanguage] = useState(languague);

  const dispatch = useDispatch();

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    dispatch(languageSelect(language));
  };

  // useEffect(() => {
  //   console.log(selectedLanguage);
  // }, [selectedLanguage]);

  return (
    <div className={styles.btnLanguage}>
      <select
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        {listLanguage.map((val, index) => (
          <option value={val} key={index}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}
