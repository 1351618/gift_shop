// src\components\wind_log_reg.tsx
"use client";
import React, { useState } from "react";
import styles from "./wind_log_reg.module.scss";

export default function WindLogReg() {
  const [isLogReg, setLogReg] = useState("log");

  function swithLogReg(str: string) {
    setLogReg(str);
  }
  return (
    <div className={styles["wind-log-reg"]}>
      <div className={styles["swith-log-reg"]}>
        <button onClick={() => swithLogReg("log")}>вход</button>
        <button onClick={() => swithLogReg("reg")}>регистрация</button>
      </div>
      <div
        className={`${styles["wind-log"]} ${
          styles[isLogReg === "log" ? "" : "hide"]
        }`}
      >
        вход
        <input type="text" />
        <input type="text" />
        ключ
        <input type="text" />
      </div>
      <div
        className={`${styles["wind-reg"]} ${
          styles[isLogReg === "reg" ? "" : "hide"]
        }`}
      >
        регистрация
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <div>вход через соцсети</div>
    </div>
  );
}
