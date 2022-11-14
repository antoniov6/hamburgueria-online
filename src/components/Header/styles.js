import styled from "styled-components";

const ContainerHeader = styled.header`
  width: 100vw;
  height: 65px;
  background-color: #f5f5f5;
  form {
    width: 80vw;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
  }
  input {
    height: 2rem;
    background-color: white;
    border-radius: 0.5rem;
    border: #e0e0e0 2px solid;
  }
  input::placeholder {
    color: #e0e0e0;
  }
  button {
    background-color: #27ae60;
    color: white;
    border-radius: 0.5rem;
    height: 1.9rem;
    width: 6rem;
    font-size: 10px;
    border: none;
  }

  @media (min-width: 1200px) {
    form {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export default ContainerHeader;
