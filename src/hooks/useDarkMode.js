import { useState } from "react"
import { botficoAppTheme, themes } from "../theme/botficoAppTheme"
import { botficoDarkTheme } from "../theme/botficoDarkTheme"

export const useDarkMode = () => {
  const [checked, setchecked] = useState(false)
  const [themeData, setthemeData] = useState(themes[0])

  const isChecked = () => {
      setchecked(true)
      if (checked) {
          setchecked(false)
          setthemeData(themes[1])
      }
  }

  const setTheme = () => {
    if (checked) {
      setthemeData(themes[1])
    } 
    if (!checked) {
      setthemeData(themes[0])
    }
  }

  return {
    isChecked,
    checked,
    themeData,
  }
}
