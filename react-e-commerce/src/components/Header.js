import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
    <div>
        <MainHeader>
            <NavLink to="/">
                <img src="./images/logo (1).png" alt="logo" />
            </NavLink>
            <Nav />
        </MainHeader>
    </div>
  )
}

const MainHeader = styled.header`
    padding: 0.4rem;
    height: 10rem;    
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    positio: relative;

    .logo {
        height: 5rem;
    }
`;

export default Header