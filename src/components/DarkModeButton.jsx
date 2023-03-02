import * as React from 'react'
import { styled } from '@mui/material/styles'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useState, useReducer, useContext } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'
import { darkModeReducer } from '../reducer/darkModeReducer'
import { Grid, IconButton, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from '../theme/botficoAppTheme'
import { DarkModeOutlined, LightModeOutlined, LightModeRounded } from '@mui/icons-material'

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
                    (<DarkModeOutlined sx={{color: '#fff'}} />) 
                    : 
                    (<LightModeOutlined sx={{color: '#fff'}} />)}
                </IconButton>
            </Grid>
        </Grid>
    )
}
