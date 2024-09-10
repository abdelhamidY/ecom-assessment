import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0px 10px;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.h1`
  color: black;
  font-size: 24px;
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 20px 0;

      a {
        color: black;
        text-decoration: none;
        font-size: 24px;
      }
    }
  }

  @media (min-width: 769px) {
    display: none; /* Hide the menu on larger screens */
  }
`;

export const CloseIcon = styled.div`
  align-self: flex-end;
  margin: 10px;
  color: black;
  font-size: 30px;
  cursor: pointer;
`;

export const HamburgerIcon = styled.div`
  color: black;
  font-size: 30px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none; /* Hide the hamburger icon on larger screens */
  }
`;

export const DesktopLinks = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin: 0 15px;

    a {
      color: black;
      text-decoration: none;
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    display: none; /* Hide the desktop links on smaller screens */
  }
`;
