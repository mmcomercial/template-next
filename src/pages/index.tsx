import Head from 'next/head';
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
    <Head>
      <title>Nome Da Empresa | Slogan</title>
    </Head>
    <div>
      <h1 className={styles.title}>
        Nome <span>Empresa</span>
      </h1>
    </div>
    </>
  )
}
