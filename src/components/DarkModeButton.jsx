import * as React from 'react'
import { useContext } from 'react'
import { Grid, IconButton, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from '../theme/botficoAppTheme'
import { DarkMode, LightMode } from '@mui/icons-material'

export const DarkModeButton = ({ setDarkMode, disableDarkMode, state }) => {

    const switchControl = useTheme()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    const enable = () => {
        localStorage.setItem('mode', theme.palette.mode)
        colorMode.toggleColorMode()
    }

    return (
        <Grid item display='flex' justifyContent='center' alignItems='center' sx={{p: 2, width: '100%'}} >
            <Grid item className='box-shadow' display='flex' justifyContent='center' alignItems='center' sx={{
                mr: 1,
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                backgroundColor: '#0c416b'
            }}
            >
                <IconButton onClick={enable}>
                    {theme.palette.mode === 'dark' ? 
                    (<DarkMode sx={{color: '#fff'}} />) 
                    : 
                    (<LightMode sx={{color: '#D4DA52'}} />)}
                </IconButton>
            </Grid>
        </Grid>
    )
}
