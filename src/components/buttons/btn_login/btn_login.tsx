"use client";

import React, { useState } from "react";
import styles from "./btn_login.module.scss";
import Link from "next/link";
import WindLogReg from "@/components/wind_log_reg/wind_log_reg";

const dataUser = {
  user: true,
};

export default function BtnLogin() {
  const [isModalLogin, setModalLogin] = useState(false);

  function interLogin() {
    if (!dataUser.user) {
      setModalLogin(true);
    } else {
      window.location.href = `/page_user/${1}`;
    }
  }

  function reversisModalLogin() {
    setModalLogin(!isModalLogin);
  }
  return (
    <div className={styles["btn-login"]}>
      <Link href={`/page_user/${1}`}>root</Link>
      <Link href={`/page_user/${2}`}>admin</Link>
      <Link href={`/page_user/${3}`}>user</Link>
      <button onClick={interLogin}>user</button>
      <div
        onClick={reversisModalLogin}
        className={`${!isModalLogin ? styles["hide"] : ""} ${
          styles["fon-modal-wind"]
        }`}
      >
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <WindLogReg />
        </div>
      </div>
    </div>
  );
}
