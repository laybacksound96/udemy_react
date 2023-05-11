import React from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";

const Meal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  h3 {
    margin: 0 0 0.25rem 0;
  }
`;
const Description = styled.span`
  font-style: italic;
`;
const Price = styled.p`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;

const MealCard = ({ mealProp }) => {
  return (
    <Meal>
      <div>
        <h3>{mealProp.name}</h3>
        <Description>{mealProp.description}</Description>
        <Price>$ {mealProp.price}</Price>
      </div>
      <MealItemForm />
    </Meal>
  );
};

export default MealCard;
