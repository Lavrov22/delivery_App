import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hello to Lavrovs Delivery</h1>
      <nav className={styles.home_nav}>
        <Link className={styles.home_link} href="/shop">Shop</Link>
        <Link className={styles.home_link} href="/shopping-card">Shopping Card</Link>
      </nav>
    </main>
  )
}

