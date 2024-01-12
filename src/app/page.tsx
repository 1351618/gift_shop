import Image from "next/image";
import styles from "./globals.module.scss";
import Home from "./home/home";

export default function App() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
}
