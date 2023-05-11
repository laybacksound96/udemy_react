import { styled } from "styled-components";

const Div = styled.div`
  text-align: right;
  button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }
  button:hover,
  button:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    margin-right: 1rem;
  }

  input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;

const MealItemForm = (props) => {
  return (
    <Div>
      <Form>
        <label>Amount</label>
        <input />
      </Form>
      <button>+ add</button>
    </Div>
  );
};

export default MealItemForm;
