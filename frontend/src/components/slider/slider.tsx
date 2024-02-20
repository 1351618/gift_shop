// C:\Users\Administrator\Desktop\git\gift_shop\frontend\src\components\slider\slider.tsx
"use client";

import styles from "./slider.module.scss";
import Image from "next/image";
import arroow_svg from "@/assets/icons/arrow.svg";
import glitch_png from "@/assets/images/logo_1.jpg";
import { fetchProducts } from "@/api/products";
import { ProductTupes } from "@/types/productTypes";
import { useEffect, useRef, useState } from "react";

// import btnBurgerMenu_svg from "./btn_burger_menu.svg";

// const dataCardShares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const dataCardShares = [0];

export default function Slider() {
  const [isDataCardProduct, setDataCardProduct] = useState<ProductTupes[]>([]);
  const [isActiveImg, setActiveImg] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(globalThis.innerWidth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        console.log(products);
        setDataCardProduct(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  function sliderSelect(index: number) {
    if (isActiveImg + index >= isDataCardProduct.length) {
      setActiveImg(0);
    } else if (isActiveImg + index < 0) {
      setActiveImg(isDataCardProduct.length - 1);
    } else {
      setActiveImg(isActiveImg + index);
    }
  }

  return (
    <div className={styles["slider"]}>
      <div className={styles["slider__cont"]}>
        <button>
          <Image
            src={arroow_svg}
            alt="left"
            style={{ transform: "rotate(180deg)" }}
            onClick={() => sliderSelect(-1)}
          />
        </button>

        <div className={styles["slider__image-container"]}>
          {isDataCardProduct.map((valImg, index) => (
            <img
              className={index === isActiveImg ? styles["activ"] : ""}
              src={valImg.foto}
              alt=""
              key={index}
            />
          ))}
        </div>

        <button>
          <Image
            src={arroow_svg}
            alt="right"
            onClick={() => sliderSelect(+1)}
          />
        </button>
      </div>

      <div className={styles["slider__nav"]}>
        {isDataCardProduct.map((valBtn, index) => (
          <button
            className={index === isActiveImg ? styles["activ"] : ""}
            onClick={() => setActiveImg(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
