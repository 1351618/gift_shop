import React from "react";
import styles from "./card_product.module.scss";
import Link from "next/link";
import { ProductTupes } from "@/types/productTypes";

export default function CardProduct({ id, ...rest }: ProductTupes) {
  // console.log(rest);
  return (
    <Link href={`/products/${id}`}>
      <div className={styles["cardProduct"]}>
        <span>{id}</span>
        <img src={rest.foto} alt="" />
        <p>{rest.name}</p>
        <strong>{rest.price}</strong>
      </div>
    </Link>
  );
}
