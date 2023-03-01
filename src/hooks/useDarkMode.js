import { useEffect, useReducer, useState } from "react"
import { darkModeReducer } from "../reducer/darkModeReducer"

// Inicializa el reducer..
const init = () => {
  return {
    background: '#fff',
    active: false,
  }
}

export const useDarkMode = () => {

  const [state, dispatch] = useReducer(darkModeReducer, init)
  const [theme, setTheme] = useState(state.background) 

  let customColors = {
      primary: state.active ? '#1E3D5E' /*'#1e4f78'*/ : '#fff',
      secondary: state.active ? '#1e4f79' : '#fff',
      textcolor: state.active ? '#fff' : '#000'
  }

  const setDarkMode = () => {
    let action = {
      type: '[Theme] Dark Mode',
      background: '#000',
      payload: true
    }
  
    setTheme(state.background)

    dispatch(action)
    console.log(theme)
  }

  const disableDarkMode = () => {
    const action = {
      type: '[Theme] Light Theme',
      background: '#fff',
      payload: false,
    }
  
    dispatch(action)
  }

  // Contiene colores custom del tema.....
  const customColor = {
    primary: state.active ? '#1e4f78': '#fff',
    textcolor: state.active ? '#fff': '#000'
  }

  let {primary, secondary, textcolor} = customColors

  useEffect(() => {
    setTheme(primary)
    console.log(theme)
  }, [state.active])

  return {
    state,
    setDarkMode,
    disableDarkMode,
    primary,
    secondary,
    textcolor,
    theme
  }
}
