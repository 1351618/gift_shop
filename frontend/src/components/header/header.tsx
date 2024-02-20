"use client";

import Link from "next/link";
import BtnLanguage from "../buttons/btn_language/btn_language";
import BtnTheme from "../buttons/btn_theme/btn_theme";
import styles from "./header.module.scss";
import Menu from "../menu/menu";
import BtnLogin from "../buttons/btn_login/btn_login";
import { use, useEffect, useState } from "react";
import BtnBurgerMenu from "../buttons/btn_burger_menu/btn_burger_menu";
import Image from "next/image";
import logo1_jpg from "./logo_1.jpg";
import logo2_jpg from "./logo_2.jpg";

export default function Header() {
  const [isMobileWindow, setMobileWindow] = useState(
    globalThis.innerWidth < 768
  );

  useEffect(() => {
    const screenWidth = () => {
      setMobileWindow(globalThis.innerWidth < 768);
    };

    if (typeof globalThis !== "undefined") {
      screenWidth();

      globalThis.addEventListener("resize", screenWidth);
    }

    return () => {
      if (typeof globalThis !== "undefined") {
        globalThis.removeEventListener("resize", screenWidth);
      }
    };
  }, []);

  return (
    <div className={styles["header"]}>
      <Link className={styles["logo-1"]} href={"/"}>
        <Image src={logo1_jpg} alt="Description" />
      </Link>
      <div
        className={`
          ${styles["header__logo-menu"]} 
          ${styles[isMobileWindow ? "hide" : ""]}`}
      >
        <Image src={logo2_jpg} alt="Description" />
        <Menu />
      </div>

      <div
        className={`
        ${styles["header__mini-consol"]} 
        ${styles[isMobileWindow ? "hide" : ""]}`}
      >
        {/* <BtnLogin /> */}
        <div className={styles["pos-btn-them"]}>
          <BtnTheme />
          <BtnLanguage />
        </div>
      </div>

      <div className={styles[isMobileWindow ? "" : "hide"]}>
        <BtnBurgerMenu />
      </div>
    </div>
  );
}
