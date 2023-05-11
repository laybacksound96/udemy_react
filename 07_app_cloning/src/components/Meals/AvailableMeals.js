import { styled } from "styled-components";
import classes from "./AvailableMeals.module.css";
import MealCard from "./MealCard";

const MealCardComponent = styled.section`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`;

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealCard mealProp={meal} key={meal.id} />
  ));
  return (
    <MealCardComponent className={classes.meals}>
      <ul>{mealList}</ul>
    </MealCardComponent>
  );
};

export default AvailableMeals;
