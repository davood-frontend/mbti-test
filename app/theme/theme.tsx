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
const MainTheme = ({ children }: { children: JSX.Element }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            {children}
        </ThemeProvider>
    );
};

export default MainTheme;