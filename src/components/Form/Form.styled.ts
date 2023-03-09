import styled from "styled-components";

const placeholderStyle = `
  font-size: 0.8rem;
  font-family: Montserrat;
`;

const FormMainContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 0 3rem 0;
  gap: 1rem;
  > h1 {
    font-size: 2rem;
    font-weight: 900;
    color: #b75742;
  }
  form {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input {
      height: 2.5rem;
      width: 20rem;
      border: none;
      border-radius: 0.4rem;
      padding: 1rem;
      &::placeholder {
        ${placeholderStyle}
      }
    }
    textarea {
      height: 5rem;
      border: none;
      border-radius: 0.4rem;
      padding: 1rem;
      width: 20rem;
      &::placeholder {
        ${placeholderStyle}
      }
    }
    input[type="submit"] {
      cursor: pointer;
      background-color: #222222;
      color: #ffffff;
      font-weight: 600;
      height: 3rem;
      &:active {
        background-color: #222222;
      }
    }
  }

  p[role="alert"] {
    color: red;
    position: absolute;
    top: 0;
    left: 0.5rem;
    font-size: 0.8rem;
    padding-bottom: 0.5rem;
  }
`;

const AlertContainer = styled.div`
  position: relative;
`;

export { FormMainContainer, AlertContainer };
