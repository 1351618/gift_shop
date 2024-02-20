import React from "react";
import styles from "./card_product.module.scss";
import Link from "next/link";
import { ProductTupes } from "@/types/productTypes";

export default function CardProduct({ id, ...rest }: ProductTupes) {
  // console.log(rest);
  return (
    <Link href={`/products/${id}`}>
      <div className={styles["cardProduct"]}>
        {/* <span>{id}</span> */}
        <span>NEW</span>
        <img className={styles["cardProduct__img"]} src={rest.foto} alt="" />
        <div className={styles["cardProduct__info"]}>
          <p>{rest.name}</p>
          <p>описание описание описание описание</p>
          <div>
            <p>tegi</p>
            <p>tegi</p>
            <p>tegi</p>
            <p>tegi</p>
            <p>tegi</p>
          </div>
          <strong>{rest.price}</strong>
          <button>в корзину</button>
        </div>
      </div>
    </Link>
  );
}
