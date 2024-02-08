"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page_user.module.scss";
import { fetchUsers } from "@/api/user";
import { useEffect, useState } from "react";

interface Props {
  params: {
    id: string[];
  };
}

interface UserTypes {
  access: string;
  name: string;
  foto: string;
  profile: {
    basket: string[];
  };
}

export default function PageUser({ params }: Props) {
  const productId = params.id[0];
  const [isUser, setUser] = useState<UserTypes | null>(null);
  const [isAdmin, setAdmin] = useState<boolean>(false);
  const [isRoot, setRoot] = useState<boolean>(false);

  // Вызовите функцию fetchUsers и дождитесь получения данных
  const fetchData = async () => {
    const Users = await fetchUsers();
    console.log(Users);

    const User = Users.find(
      (user: { id: string }) => user.id === params.id.toString()
    );
    setUser(User);
    setAdmin(User.access === "admin" || User.access === "root" ? true : false);
    setRoot(User.access === "root" ? true : false);
    console.log(User || "Продукт с id 2 не найден.");
  };

  // Вызовите функцию fetchData при монтировании компонента
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles["page-user"]}>
      <img src={isUser?.foto} alt="" />
      <p>page_admin_panel {JSON.stringify(params)}</p>
      <h1 className={styles[""]}>{params.id}</h1>
      <h2>access {isUser?.access}</h2>
      <h2>name {isUser?.name}</h2>
      <h2>basket {isUser?.profile.basket}</h2>
      <section className={styles["page-user__user"]}>
        секция с контентом пользователя
        <h1>настройки</h1>
        <h1>карзина</h1>
        <h1>история</h1>
        <h1>избранное</h1>
      </section>
      <section
        className={`${styles["page-user__admin"]} ${
          styles[isAdmin ? "" : "hide"]
        }`}
      >
        секция с контентом администратора
        <h1>поддержка и т.п.</h1>
      </section>
      <section
        className={`${styles["page-user__root"]} ${
          styles[isRoot ? "" : "hide"]
        }`}
      >
        секция с контентом управляющего
        <h1>добавление удаление товара</h1>
        <h1>статистика</h1>
      </section>
    </div>
  );
}
