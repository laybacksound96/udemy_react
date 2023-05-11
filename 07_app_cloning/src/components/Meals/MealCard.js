import React from "react";
import styled from "styled-components";

const MealCardComponent = styled.div`
  background-color: blue;
`;

const MealCard = (props) => {
  return (
    <MealCardComponent>
      {console.log(props)}
      {console.dir(props)}
    </MealCardComponent>
  );
};

export default MealCard;
