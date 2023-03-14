import * as React from 'react'
import { useContext, useState } from 'react'
import { Grid, IconButton, useTheme } from '@mui/material'
import { ColorModeContext } from '../theme/botficoAppTheme'
import { DarkMode, LightMode } from '@mui/icons-material'
import ProfileUser from './ProfileUser'

export const DarkModeButton = () => {

    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)
    const [selectedMode, setSelectedMode] = useState(localStorage.getItem('mode'))

    const enable = () => {
        colorMode.toggleColorMode()
        localStorage.setItem('mode', theme.palette.mode === 'dark' ? 'light': 'dark')
        setSelectedMode(localStorage.getItem('mode'))
        console.log(selectedMode)
    }

    return (
        <Grid item display='flex' justifyContent='space-evenly' alignItems='center' sx={{p: 2, width: '100%'}} >
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
            <ProfileUser />
        </Grid>
    )
}
