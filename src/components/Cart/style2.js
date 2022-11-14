import styled from "styled-components";

const CartFull = styled.div`
  display: flex;
  background-color: #f5f5f5;
  width: 19.5rem;
  height: auto;
  margin-left: 0.5rem;
  align-items: center;

  div {
    display: flex;
    gap: 0.3rem;
  }
  .image {
    background: #e0e0e0;
    border-radius: 5px;
    width: 4.3rem;
    height: 4.3rem;
  }
  img {
    width: 4.3rem;
    height: 4.3rem;
  }
  h4 {
    font-size: 1rem;
    margin: 0;
  }
  .nameCategory {
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 0.75rem;
  }
  button {
    width: 3rem;
    height: 1rem;
    background-color: transparent;
    color: #bdbdbd;
    border: none;
    margin-left: 4.5rem;
  }
`;

export default CartFull;
