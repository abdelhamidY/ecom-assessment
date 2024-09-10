import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  CloseIcon,
  DesktopLinks,
  HamburgerIcon,
  Logo,
  Menu,
  Nav,
} from "./style";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo>MyLogo</Logo>
      <HamburgerIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>

      <DesktopLinks>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </DesktopLinks>

      {/* Mobile Sidebar */}
      <Menu isOpen={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)}>
          <FaTimes />
        </CloseIcon>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </Menu>
    </Nav>
  );
}

export default Navigation;
