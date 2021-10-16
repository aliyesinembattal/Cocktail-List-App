import axios from 'axios';
import Link from 'next/link';
import styles from '../../styles/Cocktails.module.css';

export const getStaticProps = async () => {
  const res = await axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
  return {
    props: { cocktails: res.data },
  };
};

const Cocktails = ({ cocktails }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>All Popular Cocktails</h1>
      {cocktails &&
        cocktails.drinks.length > 0 &&
        cocktails.drinks.map((cocktail) => (
          <Link href={'/cocktails/' + cocktail.idDrink} key={cocktail.idDrink}>
            <a className={styles.single}>
              <h3>{cocktail.strDrink}</h3>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default Cocktails;
