
import '../globals.css'
import Shops from "../components/Shops";
import Header from "../components/Header";
import styles from "../page.module.css";


export default function Layout({ children }) {
    return (
        <>
           <Header/>
            <main className={styles.main_shop}>
                <section className={styles.section_shop}>
                    <div className={styles.wrapperCenter}>
                        <h1 className={styles.shopsName_title}>Shops:</h1>
                        <Shops />
                    </div>
                </section>
                <section className={styles.section_shop}>
                    {children}
                </section>
            </main>
        </>
    )
}