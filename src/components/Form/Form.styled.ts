import styled from "styled-components";

const FormMainContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 0 3rem 0;
  gap: 1rem;
  > h1 {
    font-size: 2.8rem;
    font-weight: 900;
  }
  form {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 864px) {
      flex-direction: column;
    }
  }
  form input {
    height: 2rem;
    border: none;
    border-radius: 0.4rem;
    padding: 0.5rem;
  }
  form input[type="submit"] {
    cursor: pointer;
    background-color: #222222;
    color: #ffffff;
    font-weight: 600;
  }

  form input[type="submit"]:hover {
    background-color: #222222;
  }
`;

export { FormMainContainer };
