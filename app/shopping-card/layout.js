
import '../globals.css'
import Header from "../components/Header";




export default function Layout({ children }) {
    return (
        <>
            <Header/>
            <main>
                <section>
                    {children}
                </section>
            </main>
        </>
    )
}