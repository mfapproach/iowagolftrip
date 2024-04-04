"use client"
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

import { createTheme, ThemeOptions, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


const headingFontFamilies = ['"Nunito"', 'sans-serif'].join(',');

const nonHeadingFontFamilies = ['"Nunito", "Open Sans"', 'sans-serif'].join(',');

const cursiveFontFamilies = ['"Pinyon Script"', 'cursive'].join(',');


const themeOptions = createTheme({
    palette: {
        primary: {
            main: '#076551',
            dark: '#03493a',
        },
        secondary: {
            main: '#000',
        },
        button: {
            main: '#076551',
        },
        // success: {
        //   main: '#006f3b',
        // },
    },
    typography: {
        htmlFontSize: 16,
        fontFamily: nonHeadingFontFamilies,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontFamily: headingFontFamilies,
            fontWeight: 300,
            fontSize: '6rem',
            lineHeight: 1.1,
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontFamily: headingFontFamilies,
            fontWeight: 300,
            fontSize: '3.75rem',
            lineHeight: 1.1,
            letterSpacing: '-0.00833em',
        },
        h3: {
            fontFamily: headingFontFamilies,
            fontWeight: 400,
            fontSize: '3rem',
            lineHeight: 1.14,
            letterSpacing: '0em',
        },
        h4: {
            fontFamily: headingFontFamilies,
            fontWeight: 400,
            fontSize: '2.125rem',
            lineHeight: 1.27,
            letterSpacing: '0.00735em',
        },
        h5: {
            fontFamily: headingFontFamilies,
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: 1.43,
            letterSpacing: '0em',
        },
        h6: {
            fontFamily: headingFontFamilies,
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.7,
            letterSpacing: '0.0075em',
        },
        subtitle1: {
            fontFamily: nonHeadingFontFamilies,
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.75,
            letterSpacing: '0.00938em',
        },
        subtitle2: {
            fontFamily: nonHeadingFontFamilies,
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.57,
            letterSpacing: '0.00714em',
        },
        body1: {
            fontFamily: nonHeadingFontFamilies,
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
        },
        body2: {
            fontFamily: nonHeadingFontFamilies,
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: 1.43,
            letterSpacing: '0.01071em',
        },
        button: {
            fontFamily: nonHeadingFontFamilies,
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.75,
            letterSpacing: '0.02857em',
            textTransform: 'uppercase',
        },
        caption: {
            fontFamily: nonHeadingFontFamilies,
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 1.66,
            letterSpacing: '0.03333em',
        },
        overline: {
            fontFamily: nonHeadingFontFamilies,
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 2.66,
            letterSpacing: '0.08333em',
            textTransform: 'uppercase',
        },
        cursive: {
            fontFamily: cursiveFontFamilies,
            fontWeight: 300,
            fontSize: '3.75rem',
            lineHeight: 1,
            letterSpacing: '-0.00833em',
        },
    },
})

const theme = responsiveFontSizes(themeOptions);

export default function ThemeRegistry({ children }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    )
}