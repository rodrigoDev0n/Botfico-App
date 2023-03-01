import { createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            blue: {
                default: '#141a28' //'#0c416b',
            },
            lightblue: {
                default: '#0c416b',
            },
            white: {
                default: '#fff'
            },
            side: {
                default: '#1e4f78'
            }
        } : {
            blue: {
                default: '#fff',
            },
            lightblue: {
                default: '#fff'
            },
            white: {
                default: '#000'
            },
            side: {
                default: '#fff'
            }
        }
    )
})

export const themeConfiguration = (mode) => {
    const colors = tokens(mode)
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark')
                ? {
                    primary: {
                        main: colors.blue.default,
                    },
                    backgroundcards: {
                        main: colors.lightblue.default
                    },
                    textcolor: {
                        main: colors.white.default
                    }
                } : {
                    primary: {
                        main: colors.blue.default,
                    },
                    backgroundcards: {
                        main: colors.lightblue.default,
                    },
                    textcolor: {
                        main: colors.white.default,
                    },
                    sidebar: {
                        main: colors.side.default
                    }
                }
        }
    }
}

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
})

export const useMode = () => {
    const [mode, setMode] = useState('light')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
        }),
        []
    )

    const theme = useMemo(() => createTheme(themeConfiguration(mode)), [mode])
    return [theme, colorMode]
}
