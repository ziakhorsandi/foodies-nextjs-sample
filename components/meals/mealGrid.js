import classes from './mealGrid.module.css';
import MealItem from './mealItem';
const mealGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default mealGrid;
