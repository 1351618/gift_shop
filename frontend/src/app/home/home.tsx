"use client";
import Image from "next/image";
import styles from "./home.module.scss";
import CardProduct from "@/components/card_product/card_product";
import Filtration from "@/components/filtration/filtration";
import { fetchProducts } from "@/api/products";
import { useEffect, useState } from "react";
import { ProductTupes } from "@/types/productTypes";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux-toolkit/store";
import Slider from "@/components/slider/slider";
import Window3d from "@/components/window_3d/window_3d";

export default function Home() {
  const [isDataCardProduct, setDataCardProduct] = useState<ProductTupes[]>([]);
  const languague = useSelector((state: RootState) => state.languague.value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        // console.log(products);
        setDataCardProduct(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  const translations = require(`../../locales/${languague}.json`);
  return (
    <div className={styles["home-page"]}>
      {/* <h1>{translations.homePage.cardsAdvertising}</h1> */}

      <section className={styles["sect-card-slider"]}>
        <Slider />
      </section>

      <section className={styles["sect-filtration"]}>
        <h1>{translations.homePage.filtProductCards}</h1>
        <Filtration />
      </section>
      <section className={styles["sect-card-product"]}>
        {isDataCardProduct.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </section>
      <Window3d />
    </div>
  );
}
