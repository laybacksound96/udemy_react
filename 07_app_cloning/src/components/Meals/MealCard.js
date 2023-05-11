import styled from "styled-component";

const MealCardComponent = styled.div``;

const MealCard = (props) => {
  return (
    <MealCardComponent>
      {console.log(props)}
      {console.dir(props)}
    </MealCardComponent>
  );
};

export default MealCard;
