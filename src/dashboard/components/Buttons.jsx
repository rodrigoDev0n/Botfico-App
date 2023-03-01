import { useTheme } from "@mui/material"
import { ArrowDropDown } from "@mui/icons-material"
import { Button } from "@mui/material"
import { tokens } from "../../theme/botficoAppTheme"

export const Buttons = ({buttonsData, textcolor}) => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    buttonsData.map(({name}) => (
        <Button key={name} variant='text' className="animated_view_component" sx={{
          fontSize: '11px',
          color: 'textcolor.main'
        }}> 
          {name}
          <ArrowDropDown />
        </Button>
      ))
  )
}
