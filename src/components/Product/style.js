import styled from "styled-components";

const ProductItem = styled.li`
  width: 18rem;
  height: 21rem;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  img {
    min-width: 11rem;
    max-height: 11rem;
  }

  h2 {
    font-size: 1rem;
    margin-left: 0.5rem;
    color: #333333;
  }
  p {
    font-size: 0.75rem;
    margin-left: 0.5rem;
    color: #828282;
  }
  span {
    font-size: 0.8rem;
    margin-left: 0.5rem;
    color: #27ae60;
    font-weight: 600;
  }

  button {
    height: 2.5rem;
    width: 6.6rem;
    margin-left: 0.5rem;
    background-color: #27ae60;
    color: white;
    border-radius: 0.5rem;
    border: none;
    margin-top: 0.5rem;
  }

  @media (min-width: 1200px) {
    img {
      height: 10rem;
      width: 10rem;
    }
  }
`;
export default ProductItem;
