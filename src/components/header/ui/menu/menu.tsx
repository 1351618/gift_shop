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

  const translations = require(`../../../../locales/${languague}.json`);

  return (
    <div className={styles["menu"]}>
      <Link className={Pathname === "/" ? styles["activ"] : ""} href={"/"}>
        {translations.menu.home}
        {/* home */}
      </Link>
      <Link
        className={Pathname === "/about" ? styles["activ"] : ""}
        href={"/about"}
      >
        {translations.menu.about}
        {/* about */}
      </Link>
    </div>
  );
}
