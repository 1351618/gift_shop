// src\components\buttons\btn_burger_menu\btn_burger_menu.tsx
"use client";

import styles from "./btn_burger_menu.module.scss";
import Image from "next/image";
import btnBurgerMenu_svg from "./btn_burger_menu.svg";

export default function BtnBurgerMenu() {
  return (
    <div className={styles["btn-burger-menu"]}>
      <Image src={btnBurgerMenu_svg} alt="Description" width={32} height={32} />
    </div>
  );
}
