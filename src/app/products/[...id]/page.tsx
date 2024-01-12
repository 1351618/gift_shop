"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page_product_id.module.scss";
import { fetchProducts } from "@/api/products";
import { useEffect, useState } from "react";

interface Props {
  params: {
    id: string[];
  };
}

export default function ProductId({ params }: Props) {
  const productId = params.id[0];
  const [isProductWithId, setProductWithId] = useState<{ foto?: string }>({});

  // Вызовите функцию fetchProducts и дождитесь получения данных
  const fetchData = async () => {
    const products = await fetchProducts();
    console.log(products);
    const productWithId = products.find(
      (product: { id: string }) => product.id === params.id.toString()
    );
    setProductWithId(productWithId);
    console.log(productWithId || "Продукт с id 2 не найден.");
  };

  // Вызовите функцию fetchData при монтировании компонента
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles["page-productId"]}>
      Product Id {JSON.stringify(params)}
      <h1 className={styles["page-productId_title"]}>{params.id}</h1>
      <section className={styles["sect-gallery-short-descript"]}>
        <div className={styles["gallery"]}>
          gallery
          <img src={isProductWithId.foto} alt="" />
        </div>
        <div className={styles["short-descript"]}>short descript</div>
      </section>
    </div>
  );
}
