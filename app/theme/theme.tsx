'use client'
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Quicksand } from "next/font/google";
const quickSand = Quicksand({ subsets: ["latin"], display: 'swap' });
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        info: {
            main: '#00ADB5'
        },
        primary: {
            main: '#222831'
        },
        secondary: {
            main: "#393E46"
        },
        warning: {
            main: '#EEEEEE'
        }
    }, typography: {
        fontFamily: quickSand.style.fontFamily
    },
})
lightTheme.typography.h3 = {
    fontSize: 48,
    '@media (max-width:900px)': {
        fontSize: 35,
    },
    '@media (max-width:600px) ': {
        fontSize: 25,
    },
}
const MainTheme = ({ children }: { children: JSX.Element }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            {children}
        </ThemeProvider>
    );
};

export default MainTheme;