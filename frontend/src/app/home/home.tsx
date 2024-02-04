"use client";
import Image from "next/image";
import styles from "./home.module.scss";
import CardProduct from "@/components/card_product/card_product";
import CardShares from "@/components/card_shares/card_shares";
import Filtration from "@/components/filtration/filtration";
import { fetchProducts } from "@/api/products";
import { useEffect, useState } from "react";
import { ProductTupes } from "@/types/productTypes";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux-toolkit/store";

// ! отрисовка рекламы
const dataCardShares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

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
      <h1>{translations.homePage.cardsAdvertising}</h1>

      <section className={styles["sect-card-shares"]}>
        <div className={styles["sect-card-shares__slider"]}>
          <div className={styles["sect-card-shares__list"]}>
            {dataCardShares.map((val) => (
              <CardShares key={val} />
            ))}
          </div>
        </div>
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

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </div>
  );
}
