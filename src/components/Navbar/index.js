import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem , NavLinks, MobileIcon, NavBtn, NavBtnLink} from './NavBarElements';

const Navbar = () => {
    return(
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>dolla </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'>Sign-Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='/signin'>Sign in</NavBtnLink>  
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );
}

export default Navbar;