import React from 'react'
import styled from 'styled-components'

const Navbar: React.FC = () => {
    return (
        <NavBarStyled>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="">Linkedin</a>
                </li>
                <li>
                    <a href="">Github</a>
                </li>
            </ul>
        </NavBarStyled>
    )
}

export default Navbar


const NavBarStyled = styled.nav`
    *,
    ul,
    li {
        margin: 0;
        padding: 0;
        outline: none;
    }
    width: 100%;
    height: auto;
    padding: 8px 16px;

    position: sticky;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;
    border-bottom: 1px solid #222;

    ul {
        display: flex;
        width: inherit;
        justify-content: space-around;
        align-items: center;
        border: 1px solid #fff;

        li {
            color: #222;
            list-style: none;
            padding: 4px 8px;
            text-transform: uppercase;
        }
    }
`