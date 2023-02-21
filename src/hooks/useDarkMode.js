import { useState } from "react"
import { botficoAppTheme } from "../theme/botficoAppTheme"
import { botficoDarkTheme } from "../theme/botficoDarkTheme"

export const useDarkMode = () => {
  const [checked, setchecked] = useState(false)
  const [themeData, setthemeData] = useState(botficoAppTheme)

  const isChecked = () => {
      setchecked(true)
      if (checked) {
          setchecked(false)
      }
      setTheme()
      console.log(themeData);
  }

  const setTheme = () => {
    if (checked) {
      setthemeData(botficoDarkTheme)
    } else {
      setthemeData(botficoAppTheme)
    }
  }

  return {
    isChecked,
    checked,
    themeData,
  }
}
