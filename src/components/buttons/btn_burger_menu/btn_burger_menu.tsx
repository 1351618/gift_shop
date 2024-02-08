// src/components/buttons/btn_burger_menu/btn_burger_menu.tsx

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./btn_burger_menu.module.scss";
import menuBtn from "../../../assets/icons/menu_btn.svg";
import Menu from "@/components/header/ui/menu/menu";
import BtnTheme from "../btn_theme/btn_theme";
import BtnLanguage from "../btn_language/btn_language";

export default function BtnBurgerMenu() {
  const [isOpenMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles["btn-burger-menu"]}>
      <button
        className={styles["btn-burger-menu__btn-burger"]}
        onClick={() => setOpenMenu(!isOpenMenu)}
      >
        <Image src={menuBtn} alt="menu png" width={30} height={30} />
      </button>
      <div
        className={`
        ${styles["btn-burger-menu__menu"]} 
        ${styles[isOpenMenu ? "" : "hide"]}`}
        onClick={() => setOpenMenu(!isOpenMenu)}
      >
        <ul onClick={(e) => e.stopPropagation()}>
          <li>вход</li>
          <li>
            <Menu />
          </li>
          <li>
            <BtnTheme />
            <BtnLanguage />
          </li>
          <li>4 алдво аа</li>
        </ul>
      </div>
    </div>
  );
}
