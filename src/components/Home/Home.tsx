import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { GoogleButton } from '../SignIn/SignIn';


interface Props {
    title: string;
}

const Root = styled('div')({
    padding: 0,
    margin: 0
})

const NavbarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const HeaderNavigation = styled('h2')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})

const Main = styled('main')({
    width: '100%',
    height: '100%',
    position: 'absolute'    
})

const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
})



export const Home = (props: Props) => {
    return (
        <Root>
            <NavbarContainer>
                <HeaderNavigation>
                    <li>
                        <NavA to='/'>Home</NavA>
                    </li>
                    <li>
                        <NavA to='/signup'>Sign Up</NavA>
                    </li>
                    <li>
                        <NavA to='/signin'>Sign In</NavA>
                    </li>
                    <li>
                        <NavA to='/dashboard'>Dashboard</NavA>
                    </li>
                </HeaderNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>Collect Marvel Characters!</p>
                    <Button 
                        color = 'primary'
                        variant = 'contained'
                    >
                        See Your Marvel Character Collection
                    </Button>
                </MainText>
            </Main>
        </Root>
    )
}

