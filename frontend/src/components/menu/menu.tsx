"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./menu.module.scss";
import { usePathname } from "next/navigation";

// получение в компоненте
import type { RootState } from "@/redux-toolkit/store";
import { useSelector } from "react-redux";

export default function Menu() {
  const Pathname = usePathname();
  // переменные из store.ts
  const languague = useSelector((state: RootState) => state.languague.value);

  const translations = require(`../../locales/${languague}.json`);

  return (
    <div className={styles["menu"]}>
      <Link className={Pathname === "/" ? styles["activ"] : ""} href={"/"}>
        {translations.menu.home}
        {/* home */}
      </Link>

      {/* <Link
        className={Pathname === "/about" ? styles["activ"] : ""}
        href={"/about"}
      >
        {translations.menu.about}
      </Link> */}

      <Link
        className={Pathname === "/giftBaskets" ? styles["activ"] : ""}
        href={"giftBaskets"}
      >
        {translations.menu.giftBaskets}
        {/* giftBaskets */}
      </Link>
      <Link
        className={Pathname === "/candles" ? styles["activ"] : ""}
        href={"candles"}
      >
        {translations.menu.candles}
        {/* candles */}
      </Link>
      <Link
        className={Pathname === "/souvenirs3d" ? styles["activ"] : ""}
        href={"souvenirs3d"}
      >
        {translations.menu.souvenirs3d}
        {/* souvenirs3d */}
      </Link>

      <Link
        className={Pathname === "/picturesByNumbers" ? styles["activ"] : ""}
        href={"picturesByNumbers"}
      >
        {translations.menu.picturesByNumbers}
        {/* picturesByNumbers */}
      </Link>

      <Link
        className={Pathname === "/miniPlants" ? styles["activ"] : ""}
        href={"miniPlants"}
      >
        {translations.menu.miniPlants}
        {/* miniPlants */}
      </Link>
    </div>
  );
}
