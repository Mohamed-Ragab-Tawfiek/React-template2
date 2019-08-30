import React from "react";
import { Link } from "react-router-dom";
import {NavbarSection, Logo, LogoText, UlList, ListItem, Anchor} from './style.js'

const Navbar = () => {
  return (
    <div>
      <NavbarSection>
        <div className="container">

          <Logo>
            <LogoText>Ultra Profile</LogoText>
          </Logo>

          <UlList>

            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Anchor href="#">Work</Anchor>
            </ListItem>
            <ListItem>
              <Anchor href="#">Portfolio</Anchor>
            </ListItem>
            <ListItem>
              <Anchor href="#">Resume</Anchor>
            </ListItem>
            <ListItem>
              <Anchor href="#">About</Anchor>
            </ListItem>
            <ListItem>
                <Link to="/contact">Contact</Link>
            </ListItem>

          </UlList>
        </div>
    </NavbarSection>
    </div>
  );
};

export default Navbar;
