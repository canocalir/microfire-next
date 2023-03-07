import styled from "styled-components";

const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  background-color: #bde8c6d2;
  position: fixed;
  z-index: 3;
  width: 100%;
`;

const NavbarButton = styled.button`
  background-color: #222222;
  color: #ffffff;
  font-weight: 600;
  border-radius: 2rem;
  width: 9rem;
  height: 2.5rem;
  font-size: 1rem;
  border: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

&:hover {
  background-color: #5e5e5e;
  cursor: pointer;
  transition: 300ms ease-in-out;
}
`

export {NavbarContainer, NavbarButton}