/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import styles from '../../styles/Cocktails.module.css';

const mock = new Array(15).fill(1);
export const getStaticPaths = async () => {
  const res = await axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
  const data = await res.data;

  const paths = data.drinks.map((cocktail) => {
    return {
      params: { id: cocktail.idDrink.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);
  const data = await res.data;

  return {
    props: { cocktail: data.drinks[0] },
  };
};

const Details = ({ cocktail }) => {
  return (
    <div className={styles.cocktail}>
      {cocktail.strDrinkThumb && <img className={styles.cocktailImg} src={cocktail.strDrinkThumb} alt="" />}
      <div className={styles.cocktailsDetail}>
        <h1 className={styles.cocktailName}>{cocktail.strDrink}</h1>
        <p>
          <strong>Category: </strong>
          {cocktail.strCategory}
        </p>
        <p>
          <strong>Alcoholic: </strong>
          {cocktail.strAlcoholic}
        </p>
        <p>
          <strong>Glass: </strong>
          {cocktail.strGlass}
        </p>
        <div className={styles.details}>
          <strong>Instructions: </strong>
          <p className={styles.cockIns}>{cocktail.strInstructions}</p>
        </div>
        <p className={styles.ingredients}>
          <div className={styles.cocktailList}>
            <strong>Ingredients:</strong>
          </div>
          {console.log(`mock`, cocktail['strIngredient1'])}
          {mock.map((x, index) => {
            if (cocktail[`strIngredient${index + 1}`] && cocktail[`strMeasure${index + 1}`] && cocktail[`strIngredient${index + 1}`] !== null)
              return (
                <>
                  <div>
                    <ul className={styles.cocktailList}>
                      <li>
                        {cocktail[`strIngredient${index + 1}`]} : {cocktail[`strMeasure${index + 1}`] === null ? 'Optional' : cocktail[`strMeasure${index + 1}`]}
                      </li>
                    </ul>
                  </div>
                </>
              );
          })}
        </p>
      </div>
    </div>
  );
};

export default Details;
