import Link from "next/link";
import BtnLanguage from "../buttons/btn_language/btn_language";
import BtnTheme from "../buttons/btn_theme/btn_theme";
import styles from "./header.module.scss";
import Menu from "./ui/menu/menu";
import BtnLogin from "../buttons/btn_login/btn_login";

export default function Header() {
  return (
    <div className={styles["header"]}>
      <Link href={"/"}>
        {" "}
        <h1>ЛОГОТИП</h1>{" "}
      </Link>
      <div className={styles["header__menu"]}>
        <Menu />
      </div>
      <div className={styles["header__mini-consol"]}>
        <BtnLogin />
        <div className={styles["pos-btn-them"]}>
          <BtnTheme />
          <BtnLanguage />
        </div>
      </div>
    </div>
  );
}
