import Link from "next/link"
//import Head from "next/head"
import styles from "@/styles/styles.module.css"
import Footer from "@/components/Footer"
import Counter from "@/components/Counter"
import Login from "@/components/Login"
import IndexPage from "@/components/IndexPage"
export default function Home() {
  return (
    <div className={styles.container} >
{/*<Head>
<title>Mi pagina web</title>
<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
</Head>
Navbar 
<nav className={styles.navbar}>
  <Link href="/" className={styles.navbarBrand}>Home</Link>
  <ul className={styles.navbarNav}>
    <li className={styles.navbarItem}>
      <Link href="/pages/ayuda" className={styles.navLink}>Ayuda</Link>
    </li>
    <li className={styles.navbarItem}>
      <Link href="/pages/sesion" className={styles.navLink}>Sesion</Link>
    </li>
  </ul>
</nav>
Contenido principal 
<div className={styles.content}>
  <h1>Hola mundo</h1>
</div>
 Componente Footer
<Footer/> 
<Counter/>
  <Login/>*/}
  <IndexPage/>
  </div>
  )
}
