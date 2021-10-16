import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cocktail List | Home</title>
        <meta name="keywords" content="cocktails" />
      </Head>
      <div>
        <h1 className={styles.title}>Cocktails | Home</h1>
        <p>
          A cocktail is a mixed drink typically made with a distilled liquor (such as arrack, brandy, cachaça, gin, rum, tequila, vodka, or whiskey) as its base ingredient that is then mixed with other ingredients or garnishments. Sweetened liqueurs, wine, or beer may also serve as the base or be added. If beer is one of the ingredients, the drink is called a beer cocktail.
        </p>
        <Link href="/cocktails">
          <a className={styles.btn}>See Cocktail Listing</a>
        </Link>
      </div>
    </>
  );
}
