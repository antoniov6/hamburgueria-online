import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 700px) {
    width: 95vw;
    flex-direction: row;
    overflow-x: auto;
  }
`;

export default List;
