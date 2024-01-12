"use client";

import React, { useState } from "react";
import styles from "./btn_login.module.scss";
import Link from "next/link";

const dataUser = {
  user: true,
};

export default function BtnLogin() {
  const [isModalLogin, setModalLogin] = useState(false);

  function interLogin() {
    if (dataUser.user) {
      setModalLogin(true);
    } else {
      window.location.href = "/about";
    }
  }

  function reversisModalLogin() {
    setModalLogin(!isModalLogin);
  }
  return (
    <div>
      <button onClick={interLogin}>user</button>
      <div
        onClick={reversisModalLogin}
        className={`${!isModalLogin ? styles["hide"] : ""} ${
          styles["fon-modal-wind"]
        }`}
      >
        модуль со входом
      </div>
    </div>
  );
}
