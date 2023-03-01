import { ArrowDropDown } from "@mui/icons-material"
import { Button } from "@mui/material"

export const Buttons = ({buttonsData, textcolor}) => {
  return (
    buttonsData.map(({name}) => (
        <Button key={name} variant='text' className="animated_view_component" sx={{
          fontSize: '11px',
          color: textcolor
        }}>
          {name}
          <ArrowDropDown />
        </Button>
      ))
  )
}
