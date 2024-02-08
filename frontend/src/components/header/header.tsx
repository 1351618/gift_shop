"use client";

import Link from "next/link";
import BtnLanguage from "../buttons/btn_language/btn_language";
import BtnTheme from "../buttons/btn_theme/btn_theme";
import styles from "./header.module.scss";
import Menu from "./ui/menu/menu";
import BtnLogin from "../buttons/btn_login/btn_login";
import BtnBurgerMenu from "../buttons/btn_burger_menu/btn_burger_menu";
import { use, useEffect, useState } from "react";

export default function Header() {
  const [isMobileWindow, setMobileWindow] = useState(window.innerWidth < 768);

  useEffect(() => {
    const screenWidth = () => {
      setMobileWindow(window.innerWidth < 768);
    };
    // screenWidth();

    window.addEventListener("resize", screenWidth); // Добавляем слушатель события resize

    return () => {
      window.removeEventListener("resize", screenWidth); // Удаляем слушатель события resize при размонтировании компонента
    };
  }, []);

  return (
    <div className={styles["header"]}>
      <Link href={"/"}>
        <h1>ЛОГОТИП</h1>
      </Link>
      <div
        className={`
          ${styles["header__menu"]} 
          ${styles[isMobileWindow ? "hide" : ""]}`}
      >
        <Menu />
      </div>
      <div className={styles[isMobileWindow ? "" : "hide"]}>
        <BtnBurgerMenu />
      </div>
      <div
        className={`
        ${styles["header__mini-consol"]} 
        ${styles[isMobileWindow ? "hide" : ""]}`}
      >
        <BtnLogin />
        <div className={styles["pos-btn-them"]}>
          <BtnTheme />
          <BtnLanguage />
        </div>
      </div>
    </div>
  );
}
